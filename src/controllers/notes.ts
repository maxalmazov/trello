// make API calls here

import { NewNote, Note } from '../store/notes/types';
import request from '../lib/helpers/request';

export const getNotesBySectionId = (notesSectionId: number) => {
  request.initialize();

  return request.getNotesBySectionId(notesSectionId);
};

export const addNote = (note: NewNote) => {
  return request.addNote(note);
};

export const removeNote = (noteId: number) => {
  return request.removeNote(noteId)
};

export const editNote = (note: Note) => {
  return request.editNote(note);
};

export default {
  getNotesBySectionId,
  addNote,
  removeNote,
  editNote,
}
