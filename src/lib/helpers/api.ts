import { initialData } from '../../initialData';
import { NewNote, Note, Notes } from '../../store/notes/types';
import { NewNotesSectionData } from '../../store/notesSections/types';
import { NOTES, NOTES_SECTIONS, IDS_COUNTER } from '../../store/types';

const NOTES_IRI = 'notes/';
const NOTES_SECTIONS_IRI = 'sections/';

export const initialize = () => {
  if (localStorage.getItem(NOTES_SECTIONS) === null) {
    localStorage.setItem(NOTES_SECTIONS, JSON.stringify(initialData.notesSections));
  }

  if (localStorage.getItem(NOTES) === null) {
    localStorage.setItem(NOTES, JSON.stringify(initialData.notes));
  }

  if (localStorage.getItem(IDS_COUNTER) === null) {
    localStorage.setItem(IDS_COUNTER, JSON.stringify(initialData.idsCounter));
  }
};

export const saveItem = (key: string, item: any) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) ?? '{}');
};

export const pushItem = (key: string, item: any) => {
  const items = getItem(key);
  Object.assign(items, item);
  saveItem(key, items);
};

export const removeItem = (key: string, itemId: string) => {
  const items = getItem(key);
  delete items[itemId];
  saveItem(key, items);
};

export const getNotesBySectionId = (notesSectionId: number) => {
  const notes = {};
  const allNotes: Notes = getItem(NOTES);
  const arrayOfNotes = Object.values(allNotes).filter((note: Note) => note.sectionId === notesSectionId);

  for (let i = 0; i < arrayOfNotes.length; i++) {
    Object.assign(notes, {[NOTES_IRI + arrayOfNotes[i].id]: arrayOfNotes[i]})
  }

  return notes;
};

export const addNotesSection = (newNotesSectionData: NewNotesSectionData) => {
  const lastNotesSectionId: number = getItem(IDS_COUNTER).lastNotesSectionId;

  const newNotesSection = {
    id: lastNotesSectionId + 1,
    ...newNotesSectionData,
  };
  const notesSectionToSave = {
    [NOTES_SECTIONS_IRI + newNotesSection.id]: newNotesSection
  };

  pushItem(NOTES_SECTIONS, notesSectionToSave);
  pushItem(IDS_COUNTER, {
    lastNotesSectionId: lastNotesSectionId + 1
  });

  return notesSectionToSave;
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
  const noteToSave = {
    ['notes/' + newNote.id]: newNote,
  };

  pushItem(NOTES, noteToSave);
  pushItem(IDS_COUNTER, {
    lastNoteId: lastNoteId + 1
  });

  return noteToSave;
};

export const removeNote = (noteId: number) => {
  const noteIri = NOTES_SECTIONS_IRI + noteId;
  removeItem(NOTES, noteIri);

  return noteIri;
};

export default {
  initialize,
  saveItem,
  getItem,
  getNotesBySectionId,
  addNotesSection,
  removeNotesSection,
  addNote,
  removeNote,
}
