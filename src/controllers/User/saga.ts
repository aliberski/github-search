import { call, put, takeLatest } from 'redux-saga/effects';

import apiGetUserRepos from 'api/apiGetUserRepos';
import userActions, { ActionTypes } from './actions';
import { ISetAccessToken, AccessTokenType } from './types';

const getUserRepositories = async (accessToken: AccessTokenType) => {
  const repos = await apiGetUserRepos(accessToken);
  return repos
    ? repos.map((repo: any) => ({
        id: repo.id && repo.id.toString(),
        name: repo.name,
      }))
    : [];
};

function* userSaga(action: ISetAccessToken) {
  try {
    const results = yield call(getUserRepositories, action.payload);
    yield put(userActions.setRepos(results));
  } catch (error) {}
}

export default function*() {
  yield takeLatest(ActionTypes.SET_ACCESS_TOKEN, userSaga);
}
