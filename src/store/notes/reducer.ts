import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { Notes } from './types';
import * as actions from './actionCreators';
import { initialData } from '../../initialData';

const initialState = initialData.notes;

export type Action = ActionType<typeof actions>;

const reducer: Reducer<Notes, Action> = (state: Notes = initialState, action: Action) => {
  switch (action.type) {
    // case ActionTypes.ADD_NOTE_SECTION_SUCCESS:
    //   state.lastNotesListId = action.payload.id;
    //   state.notesList[String(action.payload.id)] = action.payload;
    //
    //   return {
    //     ...state,
    //   };
    //
    // case ActionTypes.REMOVE_NOTE_SECTION_SUCCESS:
    //   state.notesList = action.payload.notesList;
    //
    //   return {
    //     ...state,
    //   };
    //
    // case ActionTypes.ADD_NOTE_SUCCESS:
    //   state.lastNotesId = action.payload.newNote.id;
    //   state.notesList[action.payload.notesSectionId].notes.push(
    //     action.payload.newNote
    //   );
    //
    //   console.log(state);
    //
    //   return {
    //     ...state,
    //   };
    //
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
