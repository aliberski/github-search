import {
  ISearchSuccessPayload,
  ISearchRequest,
  ISearchSuccess,
  ISearchError,
  ICachedResultsPayload,
  ISaveCachedResults,
} from './types';

export enum ActionTypes {
  SEARCH_REQUEST = 'SEARCH - request',
  SEARCH_SUCCESS = 'SEARCH - success',
  SEARCH_ERROR = 'SEARCH - error',
  SAVE_CACHED_RESULTS = 'SAVE_CACHED_RESULTS',
}

const searchActions = {
  searchRequest: (payload: string): ISearchRequest => ({
    type: ActionTypes.SEARCH_REQUEST,
    payload,
  }),
  searchSuccess: (payload: ISearchSuccessPayload): ISearchSuccess => ({
    type: ActionTypes.SEARCH_SUCCESS,
    payload,
  }),
  searchError: (): ISearchError => ({
    type: ActionTypes.SEARCH_ERROR,
  }),
  saveCachedResults: (payload: ICachedResultsPayload): ISaveCachedResults => ({
    type: ActionTypes.SAVE_CACHED_RESULTS,
    payload,
  }),
};

export default searchActions;
