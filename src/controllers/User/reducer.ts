import { ActionTypes } from './actions';
import { Actions, IUserStoreState } from './types';

const defaultState: IUserStoreState = {
  accessToken: null,
  repos: [],
};

export default (
  state: IUserStoreState = defaultState,
  action: Actions,
): IUserStoreState => {
  switch (action.type) {
    case ActionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case ActionTypes.SET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};
