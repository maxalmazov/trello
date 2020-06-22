import {
  getNotesList,
  getNotesListSuccess,
  addNotesSectionSuccess,
  removeNotesSectionSuccess,
  addNoteSuccess,
  removeNoteSuccess,
} from './actionCreators'
import { NewNote, NewNotesSection } from './types';
import controllers from '../../controllers';

export const loadNotes = () => (dispatch: any) => {
  dispatch(getNotesList());

  const notes = controllers.notes.getNotes();

  try {
    dispatch(getNotesListSuccess(notes))
  } catch (error) {
    console.log(error);
  }
};

export const addNotesSection = (newNoteSection: NewNotesSection) => async (dispatch: any) => {
  try {
    const newSection = controllers.notes.addNotesSection(newNoteSection);
    dispatch(addNotesSectionSuccess(newSection));
  } catch (error) {
    console.log(error);
  }
};

export const removeNotesSection = (noteSectionId: number) => async (dispatch: any) => {
  try {
    const notes = controllers.notes.removeNotesSection(noteSectionId);
    dispatch(removeNotesSectionSuccess(notes));
  } catch (error) {
    console.log(error);
  }
};

export const addNote = (note: NewNote, notesSectionId: number) => async (dispatch: any) => {
  try {
    const newNote = controllers.notes.addNote(note, notesSectionId);
    dispatch(addNoteSuccess(newNote, notesSectionId));
  } catch (error) {
    console.log(error);
  }
};

export const removeNote = (noteSectionId: number) => async (dispatch: any) => {
  try {
    const notes = controllers.notes.removeNote(noteSectionId);
    dispatch(removeNoteSuccess(notes));
  } catch (error) {
    console.log(error);
  }
};
