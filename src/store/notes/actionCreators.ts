import { action } from 'typesafe-actions';
import { ActionTypes, Note, Notes } from './types';

export const loadNotesSuccess = (notes: Notes) => action(ActionTypes.LOAD_NOTES_SUCCESS, notes);

export const addNoteSuccess = (newNote: Note, notesSectionId: number) =>
  action(ActionTypes.ADD_NOTE_SUCCESS, {newNote, notesSectionId});
export const removeNoteSuccess = (data: any) => action(ActionTypes.REMOVE_NOTE_SUCCESS, data);

