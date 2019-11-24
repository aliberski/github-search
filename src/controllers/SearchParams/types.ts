import { ActionTypes } from './actions';
import { ListDataType } from 'controllers/Search/types';

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface ISortTypePayload {
  type: ListDataType;
  order: SortOrder;
}

export interface ISearchParamsStoreState {
  currentPage: number;
  rowsPerPage: number;
  sortType: ISortTypePayload;
}

export type Actions = ISetCurrentPage | ISetRowsPerPage | ISortType;

export interface ISetCurrentPage {
  readonly type: ActionTypes.SET_CURRENT_PAGE;
  payload: number;
}

export interface ISetRowsPerPage {
  readonly type: ActionTypes.SET_ROWS_PER_PAGE;
  payload: number;
}

export interface ISortType {
  readonly type: ActionTypes.SET_SORT_TYPE;
  payload: ISortTypePayload;
}
