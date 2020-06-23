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
