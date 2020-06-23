import { initialData } from '../../initialData';

export const initialize = () => {
  localStorage.setItem('notesSections', JSON.stringify(initialData.notesSections));
  localStorage.setItem('notes', JSON.stringify(initialData.notes));
  localStorage.setItem('idsCounter', JSON.stringify(initialData.idsCounter));
};

export const saveItem = (key: string, item: any) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) ?? '{}');
};

export default {
  initialize,
  saveItem,
  getItem,
}
