import { Notes } from './notes/types';
import { NotesSections } from './notesSections/types';

export const NOTES = 'notes';
export const NOTES_SECTIONS = 'notesSections';
export const IDS_COUNTER = 'idsCounter';
export const BACKGROUND_IMAGE = 'backgroundImage';

export interface State {
  past: [];
  present: {
    notesSections: NotesSections;
    notes: Notes;
    idsCounter: {
      lastNotesSectionId: number;
      lastNoteId: number;
    };
    backgroundImage: {
      url: string;
    }
  };
  future: [];
}
