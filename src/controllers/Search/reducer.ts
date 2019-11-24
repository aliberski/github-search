import { CACHE_RESULTS_LIMIT } from 'react-native-dotenv';
import { ActionTypes } from './actions';
import {
  Actions,
  ISearchStoreState,
  ICachedResult,
  ICachedResultsPayload,
} from './types';

const defaultState: ISearchStoreState = {
  results: [],
  loading: false,
  error: false,
  cachedResults: [],
};

const processCachedResults = (
  cachedResults: ICachedResult[],
  payload: ICachedResultsPayload,
) => {
  const newResults = [payload, ...cachedResults];
  const cacheLimit = parseInt(CACHE_RESULTS_LIMIT);
  return newResults.slice(0, cacheLimit);
};

export default (
  state: ISearchStoreState = defaultState,
  action: Actions,
): ISearchStoreState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload,
        loading: false,
        error: false,
      };
    case ActionTypes.SEARCH_ERROR:
      return {
        ...state,
        results: [],
        loading: false,
        error: true,
      };
    case ActionTypes.SAVE_CACHED_RESULTS:
      return {
        ...state,
        cachedResults: processCachedResults(
          state.cachedResults,
          action.payload,
        ),
      };
    default:
      return state;
  }
};
