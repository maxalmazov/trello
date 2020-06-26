import { action } from 'typesafe-actions';
import { ActionTypes, EditedNote, Notes, AddedNote } from './types';

export const loadNotesSuccess = (notes: Notes) => action(ActionTypes.LOAD_NOTES_SUCCESS, notes);

export const addNoteSuccess = (newNote: AddedNote) =>
  action(ActionTypes.ADD_NOTE_SUCCESS, newNote);
export const removeNoteSuccess = (noteId: string) => action(ActionTypes.REMOVE_NOTE_SUCCESS, noteId);
export const editNoteSuccess = (note: EditedNote) => action(ActionTypes.EDIT_NOTE_SUCCESS, note);

