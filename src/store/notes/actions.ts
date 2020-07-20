import {
  loadNotesSuccess,
  addNoteSuccess,
  removeNoteSuccess,
  editNoteSuccess,
  moveNoteSuccess,
} from './actionCreators'
import { NewNote, Note } from './types';
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

export const removeNote = (noteId: number) => (dispatch: any) => {
  try {
    const noteUri = controllers.notes.removeNote(noteId);
    dispatch(removeNoteSuccess(noteUri));
  } catch (error) {
    console.log(error);
  }
};

export const editNote = (note: Note) => (dispatch: any) => {
  try {
    const updatedNote = controllers.notes.editNote(note);
    dispatch(editNoteSuccess(updatedNote));
  } catch (error) {
    console.log(error);
  }
};

export const moveNote = (dragNoteId: string, hoverNoteId: string, targetNotesSectionId: number) => (dispatch: any) => {
  try {
    const noteIds = controllers.notes.moveNote(dragNoteId, hoverNoteId, targetNotesSectionId);
    dispatch(moveNoteSuccess(noteIds));
  } catch (error) {
    console.log(error);
  }
};
