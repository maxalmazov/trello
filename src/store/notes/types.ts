export interface Notes {
  data: NoteWithIri,
  ids: string[],
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

export interface NoteWithIri {
  [noteId: string]: Note;
}

export interface NewNote {
  sectionId: number;
  title: string;
  description: string;
  dueTo: string;
  isCompleted: boolean;
  color: string;
}

  export interface AddedNote {
  note: NoteWithIri,
  iri: string,
}

export interface EditedNote {
  note: Note;
  iri: string;
}

export interface MovedNote {
  noteIri: string,
  notesSectionId: number,
  ids: string[],
}

export enum ActionTypes {
  LOAD_NOTES_SUCCESS = '@@notes/LOAD_NOTES_SUCCESS',
  ADD_NOTE_SUCCESS = '@@notes/ADD_NOTE_SUCCESS',
  REMOVE_NOTE_SUCCESS = '@@notes/REMOVE_NOTE_SUCCESS',
  EDIT_NOTE_SUCCESS = '@@notes/EDIT_NOTE_SUCCESS',
  MOVE_NOTE_SUCCESS = '@@notes/MOVE_NOTE_SUCCESS',
}
