import {
  addNotesSectionSuccess,
  getNotesList,
  getNotesListSuccess
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
