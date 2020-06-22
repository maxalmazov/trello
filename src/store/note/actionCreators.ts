import { action } from 'typesafe-actions';
import { ActionTypes, Note, State } from './types';

export const getNotesList = () => action(ActionTypes.GET_NOTES_LIST);
export const getNotesListSuccess = (data: any) => action(ActionTypes.GET_NOTES_LIST_SUCCESS, data);

export const addNotesSectionSuccess = (data: any) => action(ActionTypes.ADD_NOTE_SECTION_SUCCESS, data);
export const removeNotesSectionSuccess = (data: any) => action(ActionTypes.REMOVE_NOTE_SECTION_SUCCESS, data);

export const addNoteSuccess = (newNote: Note, notesSectionId: number) =>
  action(ActionTypes.ADD_NOTE_SUCCESS, {newNote, notesSectionId});
export const removeNoteSuccess = (data: any) => action(ActionTypes.REMOVE_NOTE_SUCCESS, data);

