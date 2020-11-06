import {createStore, applyMiddleware} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';

import AsyncStorage from '@react-native-community/async-storage';
import rpm from 'redux-promise-middleware';

import indexReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, indexReducer);

const enhancers = applyMiddleware(rpm, logger);

export default () => {
  let store = createStore(persistedReducer, enhancers);
  let persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};
