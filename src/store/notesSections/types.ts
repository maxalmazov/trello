export interface NotesSections {
  [notesSectionId: string]: NotesSection;
}

export interface NotesSection {
  id: number;
  title: string;
  color: string
}

export interface NewNotesSectionData {
  title: string;
  color: string;
}

export enum ActionTypes {
  GET_NOTES_SECTION = '@@notesSections/GET_NOTES_SECTION',
  GET_NOTES_SECTION_SUCCESS = '@@notesSections/GET_NOTES_SECTION_SUCCESS',
  ADD_NOTES_SECTION_SUCCESS = '@@notesSections/ADD_NOTES_SECTION_SUCCESS',
  REMOVE_NOTES_SECTION_SUCCESS = '@@notesSections/REMOVE_NOTES_SECTION_SUCCESS',
}
