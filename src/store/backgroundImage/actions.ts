import controllers from '../../controllers';
import { saveBackgroundImageSuccess } from './actionCreators';
import { BackgroundImage } from './types';

export const saveBackgroundImage = (image: File) => async (dispatch: any) => {
  try {
    controllers.backgroundImage.saveImage(image);
    // dispatch(saveBackgroundImageSuccess(imageUrl));
  } catch (error) {
    console.log(error);
  }
};

export const loadBackgroundImage = () => async (dispatch: any) => {
  try {
    const image: any = await controllers.backgroundImage.getImage();
    dispatch(saveBackgroundImageSuccess(image.url));
  } catch (error) {
    console.log(error);
  }
};
