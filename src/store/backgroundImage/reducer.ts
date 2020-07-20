import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { ActionTypes, BackgroundImage } from './types';
import * as actions from './actionCreators';
import { initialData } from '../../initialData';

const initialState = initialData.backgroundImage;

export type Action = ActionType<typeof actions>;

const reducer: Reducer<BackgroundImage, Action> = (state: BackgroundImage = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SAVE_IMAGE_SUCCESS:
      state.url = action.payload;

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
