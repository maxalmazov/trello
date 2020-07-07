import { State } from '../types';
import { Notes } from './types';

export const getNotes = (state: State): Notes => state.present.notes;
