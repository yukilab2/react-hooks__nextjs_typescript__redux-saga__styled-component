import {put, takeEvery, call} from 'redux-saga/effects';
import * as Actions from './actions';
import * as Types from './types';
// import selectors from '../example/selectors';
import * as Util from '../util';

export function* sagaCreate(action: Types.SagaCreateRequestT) {
  yield put(Actions.cleanError());
  // 例：　const auth = yield select(selectors.auth);
  const ret: {
    item: any | null,
    error: string | null
  } = yield call(Util.post, '/api/example/create', action.payload);
  if (ret.error) {
    yield put(Actions.storeError({error: ret.error}));
  } else {
    yield put(Actions.storeItem(ret.item))
  }
}

/**
 * actionに含まれる id で指定する item をサーバから取得し、 storeの item に格納する
 *
 * @param action: ReadRequestT
 */
export function* sagaRead(action: Types.SagaReadRequestT) {
  yield put(Actions.cleanError());
  console.info('you may not like sagaRead initItem before read');
  yield put(Actions.initItem()); // errorの時前のデータを表示しないように
  // 例：　const auth = yield select(selectors.auth);
  const ret: {
    item: any | null,
    error: string | null
  } = yield call(Util.post, '/api/read', action.payload);
  if (ret.error) {
    yield put(Actions.storeError({error: ret.error}));
  } else {
    yield put(Actions.storeItem(ret.item))
  }
}

/**
 * id 指定範囲のデータリスト items をサーバから取得し、 storeの list に格納する
 */
export function* sagaList(action: Types.SagaListRequestT) {
  yield put(Actions.cleanError());
  yield put(Actions.storeList([])); // errorの時前のデータを表示しないように
  // 例：　const auth = yield select(selectors.auth);
  const ret: {
    items: any | null,
    error: string | null
  } = yield call(Util.post, '/api/list', action.payload);
  if (ret.error) {
    yield put(Actions.storeError({error: ret.error}));
  } else {
    yield put(Actions.storeList(ret.items))
  }
}


export default function* watcher() {
  yield takeEvery(Types.ActionType.sagaCreate, sagaCreate);
  yield takeEvery(Types.ActionType.sagaRead, sagaRead);
  yield takeEvery(Types.ActionType.sagaList, sagaList);
  // yield takeEvery(Types.ActionType.sagaUpdate, sagaUpdate);
}
