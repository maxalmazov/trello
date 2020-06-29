import { action } from 'typesafe-actions';
import { ActionTypes, EditedNote, Notes, AddedNote, MovedNote } from './types';

export const loadNotesSuccess = (notes: Notes) => action(ActionTypes.LOAD_NOTES_SUCCESS, notes);

export const addNoteSuccess = (newNote: AddedNote) =>
  action(ActionTypes.ADD_NOTE_SUCCESS, newNote);
export const removeNoteSuccess = (noteId: string) => action(ActionTypes.REMOVE_NOTE_SUCCESS, noteId);
export const editNoteSuccess = (note: EditedNote) => action(ActionTypes.EDIT_NOTE_SUCCESS, note);
export const moveNoteSuccess = (movedNote: MovedNote) => action(ActionTypes.MOVE_NOTE_SUCCESS, movedNote);

