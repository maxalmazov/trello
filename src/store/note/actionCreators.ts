import { action } from 'typesafe-actions';
import { ActionTypes, State } from './types';

export const getNotesList = () => action(ActionTypes.GET_NOTES_LIST);
