import { ADD_AUTH, REMOVE_AUTH } from '../../utils/redux';
import { addUser, removeUser } from '../user/Action';
import { AuthType } from '../types';
import { Action, Dispatch } from '@reduxjs/toolkit';

export const addAuth = (payload: any) => {
  return {
    type: ADD_AUTH,
    payload
  };
};

export const removeAuth = () => {
  return {
    type: REMOVE_AUTH
  };
};

export const login =
  (authentication: AuthType, user = null) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch(addAuth(authentication));
    if (user) {
      dispatch(addUser(user));
    }
  };

export const logout = () => async (dispatch: Dispatch<Action>) => {
  dispatch(removeAuth());
  dispatch(removeUser());
};
