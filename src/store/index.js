/* ─── Redux Store ─── */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import portfolioReducer from './reducer';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  portfolioReducer,
  applyMiddleware(sagaMiddleware),
);

/* Start the root saga watcher */
sagaMiddleware.run(rootSaga);

export default store;
