// make API calls here
import request from '../lib/helpers/request';

export const saveImage = (imageUrl: File) => {
  return request.saveImage(imageUrl);
};

export const getImage = () => {
  return request.getImage();
};

export default {
  saveImage,
  getImage,
};
