import {
  ISetCurrentPage,
  ISetRowsPerPage,
  ISortTypePayload,
  ISortType,
} from './types';

export enum ActionTypes {
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_ROWS_PER_PAGE = 'SET_ROWS_PER_PAGE',
  SET_SORT_TYPE = 'SET_SORT_TYPE',
}

const searchParamsActions = {
  setCurrentPage: (payload: number): ISetCurrentPage => ({
    type: ActionTypes.SET_CURRENT_PAGE,
    payload,
  }),
  setRowsPerPage: (payload: number): ISetRowsPerPage => ({
    type: ActionTypes.SET_ROWS_PER_PAGE,
    payload,
  }),
  setSortType: (payload: ISortTypePayload): ISortType => ({
    type: ActionTypes.SET_SORT_TYPE,
    payload,
  }),
};

export default searchParamsActions;
