// make API calls here

import { initialData } from '../initialData';
import api from '../lib/helpers/api';
import { NewNote } from '../store/notes/types';

export const getNotesSections = () => {
  api.initialize();

  return api.getItem('notesSections');
};

export const addNotesSection = (notesSection: any) => {
  // const notes: State = JSON.parse(localStorage.getItem('notes') ?? '{}');
  //
  // const newNotesSection = {
  //   id: notes.lastNotesListId + 1,
  //   ...notesSection,
  // };
  //
  // notes.notesList[String(notes.lastNotesListId + 1)] = newNotesSection;
  // notes.lastNotesListId++;
  //
  // localStorage.setItem('notes', JSON.stringify(notes));
  //
  // return newNotesSection;
};

export const removeNotesSection = (notesSectionId: number) => {
  // const notes: State = JSON.parse(localStorage.getItem('notes') ?? '{}');
  //
  // delete(notes.notesList[String(notesSectionId)]);
  // localStorage.setItem('notes', JSON.stringify(notes));
  //
  // return notes;
};

export default {
  getNotesSections,
  addNotesSection,
  removeNotesSection,
}
