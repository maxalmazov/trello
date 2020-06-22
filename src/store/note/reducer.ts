import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { State, ActionTypes } from './types';
import * as actions from './actionCreators';

const initialState = {
  notesList: {},
  lastNotesId: 0,
  lastNotesListId: 0,
};

export type Action = ActionType<typeof actions>;

const reducer: Reducer<State, Action> = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_NOTES_LIST:
      return {
        ...state,
      };

    case ActionTypes.GET_NOTES_LIST_SUCCESS:
      return {
        ...state,
        notesList: action.payload.notesList
      };

    case ActionTypes.ADD_NOTE_SECTION_SUCCESS:
      state.lastNotesListId = action.payload.id;
      state.notesList[String(action.payload.id)] = action.payload;

      return {
        ...state,
      };

    case ActionTypes.REMOVE_NOTE_SECTION_SUCCESS:
      state.notesList = action.payload.notesList;

      return {
        ...state,
      };

    case ActionTypes.ADD_NOTE_SUCCESS:
      state.lastNotesId = action.payload.newNote.id;
      state.notesList[action.payload.notesSectionId].notes.push(
        action.payload.newNote
      );

      console.log(state);

      return {
        ...state,
      };

    case ActionTypes.REMOVE_NOTE_SUCCESS:
      state.notesList = action.payload.notesList;

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
