import { State } from '../types';
import { Note, Notes } from './types';

export const getNotes = (state: State): Notes => state.notes;

export const getNotesBySectionId = (state: State): Notes => {
  // Object.values(state.notes).filter((notes: Note) => notes.sectionId === notesSectionId);

  return state.notes;
};
