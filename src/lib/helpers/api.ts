import { initialData } from '../../initialData';
import { Note, Notes } from '../../store/notes/types';

const NOTES = 'notes';
const NOTES_SECTIONS = 'notesSections';
const IDS_COUNTER = 'idsCounter';

export const initialize = () => {
  localStorage.setItem(NOTES_SECTIONS, JSON.stringify(initialData.notesSections));
  localStorage.setItem(NOTES, JSON.stringify(initialData.notes));
  localStorage.setItem(IDS_COUNTER, JSON.stringify(initialData.idsCounter));
};

export const saveItem = (key: string, item: any) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) ?? '{}');
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

export default {
  initialize,
  saveItem,
  getItem,
  getNotesBySectionId,
}
