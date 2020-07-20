import { State } from '../types';
import { BackgroundImage } from './types';

export const getBackgroundImage = (state: State): BackgroundImage => state.present.backgroundImage;
