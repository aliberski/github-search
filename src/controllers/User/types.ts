import { ActionTypes } from './actions';

export type AccessTokenType = string | null;

export interface IRepoData {
  id: string;
  name: string;
}

export interface IUserStoreState {
  accessToken: AccessTokenType;
  repos: IRepoData[];
}

export type Actions = ISetAccessToken | ISetRepos;

export interface ISetAccessToken {
  readonly type: ActionTypes.SET_ACCESS_TOKEN;
  payload: AccessTokenType;
}

export interface ISetRepos {
  readonly type: ActionTypes.SET_REPOS;
  payload: IRepoData[];
}
