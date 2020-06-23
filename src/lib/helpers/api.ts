import { initialData } from '../../initialData';
import { Note, Notes } from '../../store/notes/types';
import { NewNotesSectionData } from '../../store/notesSections/types';

const NOTES = 'notes';
const NOTES_SECTIONS = 'notesSections';
const IDS_COUNTER = 'idsCounter';

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
    Object.assign(notes, {['notes/' + arrayOfNotes[i].id]: arrayOfNotes[i]})
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
    ['sections/' + newNotesSection.id]: newNotesSection
  };

  pushItem(NOTES_SECTIONS, notesSectionToSave);
  pushItem(IDS_COUNTER, {
    lastNotesSectionId: lastNotesSectionId + 1
  });

  return notesSectionToSave;
};

export const removeNotesSection = (notesSectionId: number) => {
  const notesSectionIri = 'sections/' + notesSectionId;
  removeItem(NOTES_SECTIONS, notesSectionIri);

  return notesSectionIri;
};

export default {
  initialize,
  saveItem,
  getItem,
  getNotesBySectionId,
  addNotesSection,
  removeNotesSection,
}
