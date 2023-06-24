import { ADD_USER, REMOVE_USER } from '../../utils/redux';

export const addUser = (payload: any) => {
  return {
    type: ADD_USER,
    payload
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};
