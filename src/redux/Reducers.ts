import { combineReducers } from 'redux';
import loaderReducer from './loader/Reducer';
import userReducer from './user/Reducer';
import authReducer from './auth/Reducer';

const Reducers = combineReducers({
  authReducer,
  userReducer,
  loaderReducer,
});

export default Reducers;
