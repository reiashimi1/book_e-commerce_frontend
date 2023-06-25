import Axios from 'axios';
import { API_URL } from './index';
import { store } from "../redux/Store";
import _ from "lodash";
import { logout } from "../redux/auth/Action";

const API = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json'
  }
});

const getAuth = () => {
  const state = store.getState();
  const accessToken = _.get(state, 'authReducer.access_token', null);
  if (!accessToken) {
    return null;
  }
  return `Bearer ${accessToken}`;
};

API.interceptors.request.use(
  (config) => {
    const authentication = getAuth();

    if (authentication) {
      config.headers.Authorization = authentication;
    }
    return config;
  },
  async () => {
    const { dispatch } = store;
    await dispatch(logout());
    window.location.reload();
  }
);

export default API;
