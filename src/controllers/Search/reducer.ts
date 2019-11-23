import { ActionTypes } from './actions';
import { Actions, ISearchStoreState } from './types';

const defaultState: ISearchStoreState = {
  results: [],
  loading: false,
  error: false,
};

export default (
  state: ISearchStoreState = defaultState,
  action: Actions,
): ISearchStoreState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST:
      return {
        results: [],
        loading: true,
        error: false,
      };
    case ActionTypes.SEARCH_SUCCESS:
      return {
        results: action.payload,
        loading: false,
        error: false,
      };
    case ActionTypes.SEARCH_ERROR:
      return {
        results: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
