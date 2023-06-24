import { ADD_AUTH, REMOVE_AUTH } from '../../utils/redux';
import { ActionType } from "../types";

const authenticationReducer = (state = {}, action: ActionType) => {
  switch (action.type) {
    case ADD_AUTH:
      return {
        ...state,
        ...action.payload
      };
    case REMOVE_AUTH:
      return {};
    default:
      return state;
  }
};

export default authenticationReducer;
