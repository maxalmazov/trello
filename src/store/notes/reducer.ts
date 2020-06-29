import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { ActionTypes, Notes } from './types';
import * as actions from './actionCreators';
import { initialData } from '../../initialData';

const initialState = initialData.notes;

export type Action = ActionType<typeof actions>;

const reducer: Reducer<Notes, Action> = (state: Notes = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOAD_NOTES_SUCCESS:
      Object.assign(state, action.payload);

      return {
        ...state,
      };

    case ActionTypes.ADD_NOTE_SUCCESS:
      Object.assign(state.data, action.payload.note);
      state.ids.push(action.payload.iri);

      return {
        ...state,
      };

    case ActionTypes.REMOVE_NOTE_SUCCESS:
      delete state.data[action.payload];
      state.ids.splice(state.ids.indexOf(action.payload), 1);

      return {
        ...state,
      };

    case ActionTypes.EDIT_NOTE_SUCCESS:
      state.data[action.payload.iri] = action.payload.note;

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
