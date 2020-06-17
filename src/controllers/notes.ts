// make API calls here

import { initialData } from '../initialData';
import { NotesSection } from '../store/note/types';

export const getNotes: any = () => {
  if (localStorage.getItem('notes') === null) {
    localStorage.setItem('notes', JSON.stringify(initialData));
  }

  return JSON.parse(localStorage.getItem('notes') ?? '{}');
};

export const addNotesSection: any = (notesSection: NotesSection) => {
  const notes = JSON.parse(localStorage.getItem('notes') ?? '{}');
  notes.notesList.push(notesSection);

  // localStorage.setItem('notes', JSON.stringify(notes));
};

export default {
  getNotes,
  addNotesSection
}
