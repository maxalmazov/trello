import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { ActionTypes, NotesSections } from './types';
import * as actions from './actionCreators';
import { initialData } from '../../initialData';

const initialState = initialData.notesSections;

export type Action = ActionType<typeof actions>;

const reducer: Reducer<NotesSections, Action> = (state: NotesSections = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_NOTES_SECTION:
      return {
        ...state,
      };

    case ActionTypes.GET_NOTES_SECTION_SUCCESS:
      return {
        ...action.payload,
      };

    case ActionTypes.ADD_NOTES_SECTION_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case ActionTypes.REMOVE_NOTES_SECTION_SUCCESS:
      delete state[action.payload];

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
