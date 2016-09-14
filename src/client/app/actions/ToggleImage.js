// This action is responsible for toggling the image

export const TOGGLE_IMAGE = 'TOGGLE_IMAGE';

export const toggleImage = function (imageObj) {
  return {
    type: TOGGLE_IMAGE,
    data: imageObj
  };
};