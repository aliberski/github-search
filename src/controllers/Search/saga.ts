import { call, put, takeLatest } from 'redux-saga/effects';
import { SEARCH_RESULTS_LIMIT } from 'react-native-dotenv';

import apiSearchRepositories from 'api/apiSearchRepositories';
import getStoreInstance from 'store/createStore';
import searchActions, { ActionTypes } from './actions';
import { mapRepositoriesData } from './mappers';
import { ISearchRequest, ICachedResult } from './types';

const { store } = getStoreInstance();

const searchRepositories = async (query: string) => {
  const limit = parseInt(SEARCH_RESULTS_LIMIT);
  const { items } = await apiSearchRepositories({ q: query });
  return mapRepositoriesData(items, limit);
};

function* searchSaga(action: ISearchRequest) {
  try {
    const query = action.payload;
    const storeInstance = store.getState();
    const cachedResults = storeInstance.search.cachedResults;
    const cachedResult = cachedResults.find(
      (res: ICachedResult) => res.query === query,
    );

    // NOTE: don't call the endpoint if search result is already cached
    let results = [];
    if (cachedResult) {
      results = cachedResult.results;
    } else {
      results = yield call(searchRepositories, query);
      yield put(searchActions.saveCachedResults({ query, results }));
    }
    yield put(searchActions.searchSuccess(results));
  } catch (error) {
    yield put(searchActions.searchError());
  }
}

export default function*() {
  yield takeLatest(ActionTypes.SEARCH_REQUEST, searchSaga);
}
