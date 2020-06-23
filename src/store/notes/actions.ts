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

export const removeNote = (noteSectionId: number) => async (dispatch: any) => {
  try {
    // const notes = controllers.notes.removeNote(noteSectionId);
    // dispatch(removeNoteSuccess(notes));
  } catch (error) {
    console.log(error);
  }
};
