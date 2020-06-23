// make API calls here

import { NewNote } from '../store/notes/types';
import api from '../lib/helpers/api';
import { NewNotesSectionData } from '../store/notesSections/types';

export const getNotesBySectionId = (notesSectionId: number) => {
  return api.getNotesBySectionId(notesSectionId);
};

export const addNote = (note: NewNote) => {
  return api.addNote(note);
};

export const removeNote = (note: number) => {

};

export default {
  getNotesBySectionId,
  addNote,
  removeNote,
}
