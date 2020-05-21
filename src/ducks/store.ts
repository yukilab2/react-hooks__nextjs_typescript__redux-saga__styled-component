import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';
import sagas from './saga';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: any) => {
  const middlewares = [middleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
    return composeWithDevTools(applyMiddleware(...middlewares));
  }
  return applyMiddleware(...middlewares);
};

function configureStore() {
  // createStoreはパラメータ3つの場合、二つ目のパラメータにstoreの初期値を渡すこともできる。ここではその方法を使わず、初期化していない。
  const store = createStore(rootReducer, bindMiddleware(sagaMiddleware));
  (store as (typeof store & {sagaTask: any})).sagaTask = sagaMiddleware.run(sagas);
  return store;
}

export default configureStore;
