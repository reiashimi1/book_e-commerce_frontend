import { ADD_USER, REMOVE_USER } from '../../utils/redux';
import { ActionType } from "../types";

const userReducer = (state = {}, action: ActionType) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        ...action.payload
      };
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export default userReducer;
