import { ISearchSuccessPayload, ISearchRequest, ISearchSuccess } from './types';

export enum ActionTypes {
  SEARCH_REQUEST = 'SEARCH - request',
  SEARCH_SUCCESS = 'SEARCH - success',
  SEARCH_ERROR = 'SEARCH - error',
}

export const searchActions = {
  searchRequest: (payload: string): ISearchRequest => ({
    type: ActionTypes.SEARCH_REQUEST,
    payload,
  }),
  searchSuccess: (payload: ISearchSuccessPayload): ISearchSuccess => ({
    type: ActionTypes.SEARCH_SUCCESS,
    payload,
  }),
  searchError: () => ({
    type: ActionTypes.SEARCH_ERROR,
  }),
};
