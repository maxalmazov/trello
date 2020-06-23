import { action } from 'typesafe-actions';
import { ActionTypes, NotesSections } from './types';

export const getNotesSections = () => action(ActionTypes.GET_NOTES_SECTION);
export const getNotesSectionsSuccess = (notesSections: NotesSections) =>
  action(ActionTypes.GET_NOTES_SECTION_SUCCESS, notesSections);

export const addNotesSectionSuccess = (notesSection: NotesSections) =>
  action(ActionTypes.ADD_NOTES_SECTION_SUCCESS, notesSection);
export const removeNotesSectionSuccess = (data: any) => action(ActionTypes.REMOVE_NOTE_SECTION_SUCCESS, data);

