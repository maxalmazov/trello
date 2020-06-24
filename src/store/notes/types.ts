export interface Notes {
  [noteId: string]: Note;
}

export interface Note {
  id: number;
  sectionId: number;
  title: string;
  description: string;
  dueTo: string;
  isCompleted: boolean;
  color: string;
}

// TODO: update all below

export interface NewNote {
  title: string;
  sectionId: number;
  description: string;
  dueTo: string;
  isCompleted: boolean;
  color: string;
}

export enum ActionTypes {
  LOAD_NOTES_SUCCESS = '@@notes/LOAD_NOTES_SUCCESS',
  ADD_NOTE_SUCCESS = '@@notes/ADD_NOTE_SUCCESS',
  REMOVE_NOTE_SUCCESS = '@@notes/REMOVE_NOTE_SUCCESS',
  EDIT_NOTE_SUCCESS = '@@notes/EDIT_NOTE_SUCCESS',
}
