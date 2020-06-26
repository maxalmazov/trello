import { Notes } from './notes/types';
import { NotesSections } from './notesSections/types';

export const NOTES = 'notes';
export const NOTES_SECTIONS = 'notesSections';
export const IDS_COUNTER = 'idsCounter';

export interface State {
  notesSections: NotesSections;
  notes: Notes;
  idsCounter: {
    lastNotesSectionId: number;
    lastNoteId: number;
  };
}
