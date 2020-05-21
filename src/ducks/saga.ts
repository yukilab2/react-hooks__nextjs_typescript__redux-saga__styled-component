import { all } from 'redux-saga/effects';

import { watcher as exampleWatcher } from './example';

export default function* rootSaga() {
  yield all([
    exampleWatcher()
  ]);
}
