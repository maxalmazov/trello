import { State } from '../types';
import { Note } from './types';

export const getNotes = (state: State) => {
  // Object.values(state.notes).filter((notes: Note) => notes.sectionId === notesSectionId);

  return state.notes;
};
