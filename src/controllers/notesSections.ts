// make API calls here

import api from '../lib/helpers/api';
import {
  NewNotesSectionData,
  NotesSection
} from '../store/notesSections/types';

export const getNotesSections = () => {
  api.initialize();

  return api.getItem('notesSections');
};

export const addNotesSection = (newNotesSectionData: NewNotesSectionData) => {
  return api.addNotesSection(newNotesSectionData);
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
