import { SHOW_LOADER, HIDE_LOADER } from '../../utils/redux';
import { ActionType } from "../types";

const spinnerReducer = (state = {}, action: ActionType) => {
  const { type, text } = action;
  switch (type) {
    case SHOW_LOADER:
      return { ...state, show: true, text };
    case HIDE_LOADER:
      return {};
    default:
      return state;
  }
};

export default spinnerReducer;
