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
      // console.log(state);
      // console.log(action);
      // console.log({
      //   ...state,
      //   ...action.payload
      // });

      return {
        ...state,
        ...action.payload
      };

    // case ActionTypes.REMOVE_NOTE_SUCCESS:
    //   state.notesList = action.payload.notesList;
    //
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
};

export default reducer;
