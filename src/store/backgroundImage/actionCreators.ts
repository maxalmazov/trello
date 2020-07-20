import { ActionTypes } from './types';
import { action } from 'typesafe-actions';

export const saveBackgroundImageSuccess = (imageUrl: string) => action(ActionTypes.SAVE_IMAGE_SUCCESS, imageUrl);
