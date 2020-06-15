import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { State, ActionTypes } from './types';
import * as actions from './actionCreators';

const initialState = {
  notesList: [
  {
    id: 0,
    title: "Task list",
    notes: [
      {
        id: 0,
        title: "Login form",
        description: "loraem a1",
      },
      {
        id: 1,
        title: "Register form",
        description: null,
      },
      {
        id: 2,
        title: "Authorization",
        description: null,
      }
    ]
  },
  {
    id: 1,
    title: "Backlog",
    notes: [
      {
        id: 3,
        title: "Authentication",
        description: "Authentication",
      }
    ]
  },
  {
    id: 2,
    title: "Completed",
    notes: [
      {
        id: 5,
        title: "Document",
        description: "Document",
      },
      {
        id: 6,
        title: "DUml",
        description: null,
      }
    ]
  }
]};

export type Action = ActionType<typeof actions>;

const reducer: Reducer<State, Action> = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_NOTES_LIST:
      return state;

    default:
      return state;
  }
};

export default reducer;
