export interface State {
  notesList: {[notesListId: string]: NotesSection};
  lastNotesId: number;
  lastNotesListId: number;
}

export interface Note {
  id: number;
  title: string;
  description: string;
  dueTo: string;
  isComplete: boolean;
  asset: string|null;
}

export interface NotesSection {
  id: number;
  title: string;
  notes: Note[];
}

export interface NewNotesSection {
  title: string;
  notes: Note[];
}

export enum ActionTypes {
  GET_NOTES_LIST = '@@notes/GET_NOTES_LIST',
  GET_NOTES_LIST_SUCCESS = '@@notes/GET_NOTES_LIST_SUCCESS',
  ADD_NOTE_SECTION_SUCCESS = '@@notes/ADD_NOTE_SECTION_SUCCESS',
  REMOVE_NOTE_SECTION_SUCCESS = '@@notes/REMOVE_NOTE_SECTION_SUCCESS',
}
