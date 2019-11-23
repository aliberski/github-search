import { ActionTypes } from './actions';

export enum ListDataType {
  ID = 'id',
  NAME = 'name',
  OWNER = 'owner',
  STARS = 'stars',
  CREATED_AT = 'createdAt',
}

export interface ISearchResult {
  [ListDataType.ID]: string;
  [ListDataType.NAME]: string;
  [ListDataType.OWNER]: string;
  [ListDataType.STARS]: string;
  [ListDataType.CREATED_AT]: string;
}

export interface ISearchStoreState {
  loading: boolean;
  results: ISearchResult[];
  error: boolean;
}

export type ISearchSuccessPayload = ISearchResult[];

export type Actions = ISearchRequest | ISearchSuccess | ISearchError;

export interface ISearchRequest {
  readonly type: ActionTypes.SEARCH_REQUEST;
  payload: string;
}

export interface ISearchSuccess {
  readonly type: ActionTypes.SEARCH_SUCCESS;
  payload: ISearchSuccessPayload;
}

export interface ISearchError {
  readonly type: ActionTypes.SEARCH_ERROR;
}
