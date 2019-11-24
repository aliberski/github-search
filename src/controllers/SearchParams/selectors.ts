import { IStoreState } from 'store/index';

export const rowsPerPageSelector = (state: IStoreState) =>
  state.searchParams.rowsPerPage;

export const currentPageSelector = (state: IStoreState) =>
  state.searchParams.currentPage;

export const sortTypeSelector = (state: IStoreState) =>
  state.searchParams.sortType;
