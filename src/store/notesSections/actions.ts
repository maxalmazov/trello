import {
  getNotesSections,
  getNotesSectionsSuccess,
  addNotesSectionSuccess,
  removeNotesSectionSuccess,
} from './actionCreators';
import controllers from '../../controllers';

export const loadNotesSections = () => (dispatch: any) => {
  dispatch(getNotesSections());

  try {
    dispatch(getNotesSectionsSuccess(controllers.notesSections.getNotesSections()));
  } catch (error) {
    console.log(error);
  }
};

export const addNotesSection = (newNoteSection: any) => async (dispatch: any) => {
  try {
    // const newSection = controllers.notes.addNotesSection(newNoteSection);
    // dispatch(addNotesSectionSuccess(newSection));
  } catch (error) {
    console.log(error);
  }
};

export const removeNotesSection = (noteSectionId: number) => async (dispatch: any) => {
  try {
    // const notes = controllers.notes.removeNotesSection(noteSectionId);
    // dispatch(removeNotesSectionSuccess(notes));
  } catch (error) {
    console.log(error);
  }
};
