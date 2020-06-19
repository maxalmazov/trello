import {
  addNotesSectionSuccess,
  getNotesList,
  getNotesListSuccess,
  removeNotesSectionSuccess,
} from './actionCreators'
import { NewNotesSection } from './types';
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
