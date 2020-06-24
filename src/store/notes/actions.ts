import {
  loadNotesSuccess,
  addNoteSuccess,
  removeNoteSuccess,
} from './actionCreators'
import { NewNote } from './types';
import controllers from '../../controllers';

export const loadNotesBySectionId = (notesSectionId: number) => async (dispatch: any) => {
  try {
    const notes = controllers.notes.getNotesBySectionId(notesSectionId);
    dispatch(loadNotesSuccess(notes));
  } catch (error) {
    console.log(error);
  }
};

export const addNote = (note: NewNote) => async (dispatch: any) => {
  try {
    const newNote = controllers.notes.addNote(note);
    dispatch(addNoteSuccess(newNote));
  } catch (error) {
    console.log(error);
  }
};

export const removeNote = (noteId: number) => async (dispatch: any) => {
  try {
    const noteUri = controllers.notes.removeNote(noteId);
    dispatch(removeNoteSuccess(noteUri));
  } catch (error) {
    console.log(error);
  }
};

export const editNote = (note: NewNote) => async (dispatch: any) => {
  try {
    const newNote = controllers.notes.addNote(note);
    dispatch(addNoteSuccess(newNote));
  } catch (error) {
    console.log(error);
  }
};
