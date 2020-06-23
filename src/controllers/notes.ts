// make API calls here

import { initialData } from '../initialData';
import { NewNote } from '../store/notes/types';
import api from '../lib/helpers/api';

export const getNotesBySectionId = (notesSectionId: number) => {
  return api.getNotesBySectionId(notesSectionId);
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

export const addNote = (note: NewNote, notesSectionId: number) => {
  // const notes: State = JSON.parse(localStorage.getItem('notes') ?? '{}');
  //
  // const newNote = {
  //   id: notes.lastNotesId + 1,
  //   ...notes
  // };
  //
  // notes.notesList[String(notesSectionId)].notes.push(newNote);
  // notes.lastNotesId++;
  //
  // localStorage.setItem('notes', JSON.stringify(notes));
  //
  // return newNote;
};

export const removeNote = (note: number) => {

};

export default {
  getNotesBySectionId,
  addNotesSection,
  removeNotesSection,
  addNote,
  removeNote,
}
