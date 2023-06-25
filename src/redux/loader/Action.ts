import { HIDE_LOADER, SHOW_LOADER } from '../../utils/redux';

export const showLoader = (text = '') => {
  return { type: SHOW_LOADER, text };
};

export const hideLoader = () => {
  return { type: HIDE_LOADER };
};
