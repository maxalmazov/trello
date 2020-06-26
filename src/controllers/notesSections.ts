// make API calls here

import request from '../lib/helpers/request';
import {
  NewNotesSectionData,
  NotesSection
} from '../store/notesSections/types';

export const getNotesSections = () => {
  request.initialize();

  return request.getItem('notesSections');
};

export const addNotesSection = (newNotesSectionData: NewNotesSectionData) => {
  return request.addNotesSection(newNotesSectionData);
};

export const removeNotesSection = (notesSectionId: number) => {
  return request.removeNotesSection(notesSectionId);
};

export default {
  getNotesSections,
  addNotesSection,
  removeNotesSection,
}
