import { all } from 'redux-saga/effects';

import searchSaga from 'controllers/Search/saga';
import userSaga from 'controllers/User/saga';

export default function* rootSaga() {
  yield all([
    searchSaga(),
    userSaga(),
    // call other sagas here
  ]);
}
