import {
  addNotesSectionSuccess,
  getNotesList,
  getNotesListSuccess
} from './actionCreators'
import { NotesSection } from './types';
import { initialData } from '../../initialData';
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

export const addNotesSection = (newNoteSection: NotesSection) => async (dispatch: any) => {
  try {
    controllers.notes.addNotesSection(newNoteSection);
    dispatch(addNotesSectionSuccess(newNoteSection));
  } catch (error) {
    console.log(error);
  }


  // const newNoteList = localStorage.setItem()
};
