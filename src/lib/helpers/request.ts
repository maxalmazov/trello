import { initialData } from '../../initialData';
import { NewNote, Note, Notes } from '../../store/notes/types';
import { NewNotesSectionData } from '../../store/notesSections/types';
import {
  NOTES,
  NOTES_SECTIONS,
  IDS_COUNTER,
  BACKGROUND_IMAGE,
} from '../../store/types';
import { openDB } from 'idb';

const NOTES_IRI = 'notes/';
const NOTES_SECTIONS_IRI = 'sections/';

export const initialize = async () => {
  if (localStorage.getItem(NOTES_SECTIONS) === null) {
    localStorage.setItem(NOTES_SECTIONS, JSON.stringify(initialData.notesSections));
  }

  if (localStorage.getItem(NOTES) === null) {
    localStorage.setItem(NOTES, JSON.stringify(initialData.notes));
  }

  if (localStorage.getItem(IDS_COUNTER) === null) {
    localStorage.setItem(IDS_COUNTER, JSON.stringify(initialData.idsCounter));
  }

  if (localStorage.getItem(BACKGROUND_IMAGE) === null) {
    localStorage.setItem(BACKGROUND_IMAGE, JSON.stringify(initialData.backgroundImage));
  }

  const db = await openDB('backgroundImage', 1, {
    upgrade(db): void {
      if (!db.objectStoreNames.contains('image')) {
        db.createObjectStore('image');
      }
    }
  });

  db.close();
};

const saveItem = (key: string, item: any) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) ?? '{}');
};

const pushItem = (key: string, item: any, iri?: string) => {
  const items = getItem(key);

  if (iri !== null) {
    items.ids.push(iri);
  }

  Object.assign(items.data, item);
  saveItem(key, items);
};

const removeItem = (key: string, itemId: string) => {
  const items = getItem(key);

  delete items.data[itemId];
  items.ids.splice(items.ids.indexOf(itemId), 1);

  saveItem(key, items);
};

const updateIdsCounter = (key: string) => {
  const counter = getItem(IDS_COUNTER);

  switch (key) {
    case NOTES_SECTIONS:
      counter.lastNotesSectionId++;

      break;
    case NOTES:
      counter.lastNoteId++;

      break;
  }

  saveItem(IDS_COUNTER, counter);
};

export const getNotesBySectionId = (notesSectionId: number) => {
  const notes: Notes = getItem(NOTES);
  const arrayOfNotes = Object.values(notes.data).filter((note: Note) => note.sectionId === notesSectionId);

  for (let i = 0; i < arrayOfNotes.length; i++) {
    Object.assign(notes.data, {[NOTES_IRI + arrayOfNotes[i].id]: arrayOfNotes[i]})
  }

  return notes;
};

export const addNotesSection = (newNotesSectionData: NewNotesSectionData) => {
  const lastNotesSectionId: number = getItem(IDS_COUNTER).lastNotesSectionId;
  const newNotesSection = {
    id: lastNotesSectionId + 1,
    ...newNotesSectionData,
  };
  const notesSectionIri = NOTES_SECTIONS_IRI + newNotesSection.id;
  const notesSectionToSave = {
    [notesSectionIri]: newNotesSection
  };

  pushItem(NOTES_SECTIONS, notesSectionToSave, notesSectionIri);
  updateIdsCounter(NOTES_SECTIONS);

  return {
    notesSection: notesSectionToSave,
    iri: notesSectionIri,
  };
};

export const removeNotesSection = (notesSectionId: number) => {
  // TODO: remove related notes

  const notesSectionIri = NOTES_SECTIONS_IRI + notesSectionId;
  removeItem(NOTES_SECTIONS, notesSectionIri);

  return notesSectionIri;
};

export const addNote = (noteData: NewNote) => {
  const lastNoteId = getItem(IDS_COUNTER).lastNoteId;
  const newNote = {
    id: lastNoteId + 1,
    ...noteData,
  };
  const noteIri = NOTES_IRI + newNote.id;
  const noteToSave = {
    [noteIri]: newNote,
  };

  pushItem(NOTES, noteToSave, noteIri);
  updateIdsCounter(NOTES);

  return {
    note: noteToSave,
    iri: noteIri,
  };
};

export const removeNote = (noteId: number) => {
  const noteIri = NOTES_IRI + noteId;
  removeItem(NOTES, noteIri);

  return noteIri;
};

export const editNote = (note: Note) => {
  let notes = getItem(NOTES);
  notes.data[NOTES_IRI + note.id] = note;
  saveItem(NOTES, notes);

  return {
    note: note,
    iri: NOTES_IRI + note.id,
  };
};

export const moveNote = (dragNoteId: string, hoverNoteId: string, targetNotesSectionId: number) => {
  const notes = getItem(NOTES);
  const hoverNoteIndex = notes.ids.indexOf(hoverNoteId);
  const dragNoteIndex = notes.ids.indexOf(dragNoteId);

  notes.ids.splice(dragNoteIndex, 1);
  notes.ids.splice(hoverNoteIndex, 0, dragNoteId);
  notes.data[dragNoteId].sectionId = targetNotesSectionId;

  saveItem(NOTES, notes);

  return {
    noteIri: dragNoteId,
    notesSectionId: targetNotesSectionId,
    ids: notes.ids
  };
};

export const saveImage = async (newImage: File) => {
  const db = await openDB('backgroundImage', 1);

  await db.put('image', newImage, 'bgImage');

  const image = await db.get('image', 'bgImage');
  console.log(image);

  return {
    url: URL.createObjectURL(image)
  }
};

export const getImage = async () => {
  const db = await openDB('backgroundImage', 1);
  const image = await db.get('image', 'bgImage');

  return {url: URL.createObjectURL(image)}
};

export default {
  initialize,
  getItem,
  getNotesBySectionId,
  addNotesSection,
  removeNotesSection,
  addNote,
  removeNote,
  editNote,
  moveNote,
  saveImage,
  getImage,
}
