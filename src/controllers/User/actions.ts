import {
  ISetAccessToken,
  AccessTokenType,
  IRepoData,
  ISetRepos,
} from './types';

export enum ActionTypes {
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',
  SET_REPOS = 'SET_REPOS',
}

const userActions = {
  setAccessToken: (payload: AccessTokenType): ISetAccessToken => ({
    type: ActionTypes.SET_ACCESS_TOKEN,
    payload,
  }),
  setRepos: (payload: IRepoData[]): ISetRepos => ({
    type: ActionTypes.SET_REPOS,
    payload,
  }),
};

export default userActions;
