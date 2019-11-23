import { call, put, takeLatest } from 'redux-saga/effects';

import apiSearchRepositories from 'api/apiSearchRepositories';
import { ActionTypes, searchActions } from './actions';
import { mapRepositoriesData } from './mappers';
import { ISearchRequest } from './types';

const searchRepositories = async (query: string) => {
  const { items } = await apiSearchRepositories({ q: query });
  return mapRepositoriesData(items);
};

function* searchSaga(action: ISearchRequest) {
  try {
    const results = yield call(searchRepositories, action.payload);
    yield put(searchActions.searchSuccess(results));
  } catch (_) {
    yield put(searchActions.searchError());
  }
}

export default function*() {
  yield takeLatest(ActionTypes.SEARCH_REQUEST, searchSaga);
}
