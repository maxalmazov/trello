// make API calls here

import { initialData } from '../initialData';
import { NewNotesSection, State } from '../store/note/types';

export const getNotes = () => {
  if (localStorage.getItem('notes') === null) {
    localStorage.setItem('notes', JSON.stringify(initialData));
  }

  return JSON.parse(localStorage.getItem('notes') ?? '{}');
};

export const addNotesSection = (notesSection: NewNotesSection) => {
  const notes: State = JSON.parse(localStorage.getItem('notes') ?? '{}');

  const newNotesSection = {
    id: notes.lastNotesListId + 1,
    ...notesSection,
  };

  notes.notesList[String(notes.lastNotesListId + 1)] = newNotesSection;
  notes.lastNotesListId++;

  localStorage.setItem('notes', JSON.stringify(notes));

  return newNotesSection;
};

export const removeNotesSection = (notesSectionId: number) => {
  const notes: State = JSON.parse(localStorage.getItem('notes') ?? '{}');

  delete(notes.notesList[String(notesSectionId)]);
  localStorage.setItem('notes', JSON.stringify(notes));

  return notes;
};

export default {
  getNotes,
  addNotesSection,
  removeNotesSection,
}
