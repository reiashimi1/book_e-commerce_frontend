import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reducers from './Reducers';
import { Window } from './types';

const middleware = [];
const enhancers = [];

const composeEnhancers = (window as Window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer', 'authReducer', 'loaderReducer']
};

const persistedReducer = persistReducer(persistConfig, Reducers);

middleware.push(thunk);
enhancers.push(applyMiddleware(...middleware));

const store = createStore<any, any, any, any>(
  persistedReducer,
  composeEnhancers(...enhancers)
);

const persistor = persistStore(store);

export { store, persistor };
