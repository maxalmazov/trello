import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
  Reducer
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import notes from './notes/reducer';
import notesSections from './notesSections/reducer';
import undoable, { excludeAction }  from 'redux-undo';
import { ActionTypes as NotesActionTypes } from './notes/types';
import { ActionTypes as NotesSectionsActionTypes } from './notesSections/types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middleware = [thunk];

const reducer: Reducer = combineReducers({
  notes,
  notesSections,
});

export const rootReducer = undoable(reducer, {
  filter: excludeAction([
    '@@INIT',
    NotesActionTypes.LOAD_NOTES_SUCCESS,
    NotesSectionsActionTypes.GET_NOTES_SECTION_SUCCESS,
  ])
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    composeWithDevTools(applyMiddleware(thunk))
  )
);

export default store;
