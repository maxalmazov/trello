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

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initialState: any = {};

const middleware = [thunk];

export const rootReducer: Reducer = combineReducers({
  notes,
  notesSections,
});

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    composeWithDevTools(applyMiddleware(thunk))
  )
);

export default store;
