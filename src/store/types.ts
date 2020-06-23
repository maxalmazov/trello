import { Note } from './notes/types';
import { NotesSection } from './notesSections/types';

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
