// make API calls here

import { NewNote } from '../store/notes/types';
import api from '../lib/helpers/api';
import { NewNotesSectionData } from '../store/notesSections/types';

export const getNotesBySectionId = (notesSectionId: number) => {
  return api.getNotesBySectionId(notesSectionId);
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
  addNote,
  removeNote,
}
