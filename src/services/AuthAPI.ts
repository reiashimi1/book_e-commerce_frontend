import Axios from 'axios';
import { API_URL } from './index';

const AuthAPI = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json'
  }
});

export default AuthAPI;
