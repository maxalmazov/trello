// make API calls here

import api from '../lib/helpers/api';
import {
  NewNotesSectionData,
  NotesSection
} from '../store/notesSections/types';

export const getNotesSections = () => {
  api.initialize();

  return api.getItem('notesSections');
};

export const addNotesSection = (newNotesSectionData: NewNotesSectionData) => {
  return api.addNotesSection(newNotesSectionData);
};

export const removeNotesSection = (notesSectionId: number) => {
  return api.removeNotesSection(notesSectionId);
};

export default {
  getNotesSections,
  addNotesSection,
  removeNotesSection,
}
