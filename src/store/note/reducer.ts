import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { State, ActionTypes } from './types';
import * as actions from './actionCreators';

const initialState = {
  notesList: []
};

export type Action = ActionType<typeof actions>;

const reducer: Reducer<State, Action> = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_NOTES_LIST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.GET_NOTES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        notesList: action.payload.notesList
      };

    case ActionTypes.ADD_NOTE_SECTION_SUCCESS:
      state.notesList.push(action.payload);

      return {
        ...state,
        loading: false,
        loaded: true,
      };

    default:
      return state;
  }
};

export default reducer;
