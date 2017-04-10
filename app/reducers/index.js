import { AsyncStorage } from 'react-native';

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';

const reducer = combineReducers({
  state: (state = {}) => state
});

const bootstrapStore = () => {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = applyMiddleware(sagaMiddleware, logger);
  const store = createStore(reducer, middlewares);

  sagaMiddleware.run(sagas);

  return store;
};

export { bootstrapStore };

/**
* Example state
*
* crops: {
*   cropsById: {},
*   cropsIds: [],
* }
*/
