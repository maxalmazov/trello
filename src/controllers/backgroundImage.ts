// make API calls here
import request from '../lib/helpers/request';

export const saveImage = (image: File) => {
  return request.saveImage(image);
};

export const getImage = () => {
  return request.getImage();
};

export default {
  saveImage,
  getImage,
};
