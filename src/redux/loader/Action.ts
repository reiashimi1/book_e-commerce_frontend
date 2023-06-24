import { HIDE_LOADER, SHOW_LOADER } from '../../utils/redux';

export const showSpinner = (text = '') => {
  return { type: SHOW_LOADER, text };
};

export const hideSpinner = () => {
  return { type: HIDE_LOADER };
};
