export interface State {
  notesList: NotesSection[];
}

export interface Note {
  id: number;
  title: string;
  description: string|null;
}

export interface NotesSection {
  id: number;
  title: string;
  notes: Note[];
}

export enum ActionTypes {
  GET_NOTES_LIST = '@@notes/GET_NOTES_LIST',
}
