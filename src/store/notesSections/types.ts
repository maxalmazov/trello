export interface NotesSections {
  [notesSectionId: string]: NotesSection;
}

export interface NotesSection {
  id: number;
  title: string;
  notesIds: string[];
}

export enum ActionTypes {
  GET_NOTES_SECTION = '@@notesSections/GET_NOTES_SECTION',
  GET_NOTES_SECTION_SUCCESS = '@@notesSections/GET_NOTES_SECTION_SUCCESS',
  GET_NOTES_SECTION_FAILURE = '@@notesSections/GET_NOTES_SECTION_FAILURE',
  ADD_NOTE_SECTION_SUCCESS = '@@notesSections/ADD_NOTE_SECTION_SUCCESS',
  REMOVE_NOTE_SECTION_SUCCESS = '@@notesSections/REMOVE_NOTE_SECTION_SUCCESS',
}
