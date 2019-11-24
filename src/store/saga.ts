import { all } from 'redux-saga/effects';

import searchSaga from 'controllers/Search/saga';

export default function* rootSaga() {
  yield all([
    searchSaga(),
    // call other sagas here
  ]);
}
