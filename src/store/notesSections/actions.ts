import {
  getNotesSections,
  getNotesSectionsSuccess,
  addNotesSectionSuccess,
  removeNotesSectionSuccess,
} from './actionCreators';
import controllers from '../../controllers';
import { NewNotesSectionData } from './types';

export const loadNotesSections = () => (dispatch: any) => {
  dispatch(getNotesSections());

  try {
    dispatch(getNotesSectionsSuccess(controllers.notesSections.getNotesSections()));
  } catch (error) {
    console.log(error);
  }
};

export const addNotesSection = (newNotesSectionData: NewNotesSectionData) => async (dispatch: any) => {
  try {
    const newNotesSection = controllers.notesSections.addNotesSection(newNotesSectionData);
    dispatch(addNotesSectionSuccess(newNotesSection));
  } catch (error) {
    console.log(error);
  }
};

export const removeNotesSection = (notesSectionId: number) => async (dispatch: any) => {
  try {
    const notesSectionIri = controllers.notesSections.removeNotesSection(notesSectionId);
    dispatch(removeNotesSectionSuccess(notesSectionIri));
  } catch (error) {
    console.log(error);
  }
};
