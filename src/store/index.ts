import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
  Reducer
} from 'redux';
import undoable, { excludeAction }  from 'redux-undo';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import notes from './notes/reducer';
import notesSections from './notesSections/reducer';
import backgroundImage from './backgroundImage/reducer';
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
  backgroundImage,
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
