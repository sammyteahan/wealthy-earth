/**
* Example state
*
* crops: {
*   cropsById: {},
*   cropsIds: [],
* }
*/
import { AsyncStorage } from 'react-native';

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';

const reducer = combineReducers({
  state: (state = {}) => state,
});

/**
 * Bootstraps redux by creating a new store.
 *
 * @return {object} freshly minted redux store.
 */
const bootstrapStore = () => {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = applyMiddleware(sagaMiddleware, logger);
  const store = createStore(reducer, undefined, compose(middlewares));

  sagaMiddleware.run(sagas);

  return store;
};

export { bootstrapStore };
