import { Note } from './notes/types';
import { NotesSection } from './notesSections/types';

export const NOTES = 'notes';
export const NOTES_SECTIONS = 'notesSections';
export const IDS_COUNTER = 'idsCounter';

export interface State {
  notesSections: {
    [notesSectionId: string]: NotesSection;
  };
  notes: {
    [notesId: string]: Note;
  };
  idsCounter: {
    lastNotesSectionId: number;
    lastNoteId: number;
  };
}
