import { action } from 'typesafe-actions';
import { ActionTypes, NotesSections, AddedNotesSection } from './types';

export const getNotesSections = () => action(ActionTypes.GET_NOTES_SECTION);
export const getNotesSectionsSuccess = (notesSections: NotesSections) =>
  action(ActionTypes.GET_NOTES_SECTION_SUCCESS, notesSections);

export const addNotesSectionSuccess = (notesSection: AddedNotesSection) =>
  action(ActionTypes.ADD_NOTES_SECTION_SUCCESS, notesSection);
export const removeNotesSectionSuccess = (notesSectionId: string) =>
  action(ActionTypes.REMOVE_NOTES_SECTION_SUCCESS, notesSectionId);

