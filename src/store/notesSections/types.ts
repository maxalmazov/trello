export interface NotesSections {
  data: NotesSectionWithIri,
  ids: string[],
}

export interface NotesSection {
  id: number;
  title: string;
  color: string
}

export interface NotesSectionWithIri {
  [notesSectionId: string]: NotesSection;
}

export interface AddedNotesSection {
  notesSection: NotesSectionWithIri;
  iri: string;
}

export interface NewNotesSectionData {
  title: string;
  color: string;
}

export enum ActionTypes {
  GET_NOTES_SECTION_SUCCESS = '@@notesSections/GET_NOTES_SECTION_SUCCESS',
  ADD_NOTES_SECTION_SUCCESS = '@@notesSections/ADD_NOTES_SECTION_SUCCESS',
  REMOVE_NOTES_SECTION_SUCCESS = '@@notesSections/REMOVE_NOTES_SECTION_SUCCESS',
}
