// make API calls here

import { initialData } from '../initialData';
import { NewNotesSection, State } from '../store/note/types';

export const getNotes: any = () => {
  if (localStorage.getItem('notes') === null) {
    localStorage.setItem('notes', JSON.stringify(initialData));
  }

  return JSON.parse(localStorage.getItem('notes') ?? '{}');
};

export const addNotesSection: any = (notesSection: NewNotesSection) => {
  const notes: State = JSON.parse(localStorage.getItem('notes') ?? '{}');

  const newNotesSection = {
    id: notes.lastNotesListId + 1,
    ...notesSection,
  };

  notes.notesList.push(newNotesSection);
  notes.lastNotesListId++;

  // localStorage.setItem('notes', JSON.stringify(notes));

  return newNotesSection;
};

export default {
  getNotes,
  addNotesSection
}
