import controllers from '../../controllers';
import { saveBackgroundImageSuccess } from './actionCreators';

export const saveBackgroundImage = (newImage: File) => async (dispatch: any) => {
  try {
    const image = await controllers.backgroundImage.saveImage(newImage);
    dispatch(saveBackgroundImageSuccess(image.url));
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
