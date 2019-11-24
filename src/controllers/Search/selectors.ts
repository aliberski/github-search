import { createSelector } from 'reselect';
import { IStoreState } from 'store/index';
import { ISearchResult } from './types';
import {
  rowsPerPageSelector,
  currentPageSelector,
  sortTypeSelector,
} from 'controllers/SearchParams/selectors';
import { ListDataType } from './types';
import { ISortTypePayload, SortOrder } from 'controllers/SearchParams/types';

const searchResultsSelector = (state: IStoreState) => state.search.results;

const getSortFunction = (type: ListDataType, order: SortOrder) => (
  a: ISearchResult,
  b: ISearchResult,
) => {
  // NOTE:
  // - `name` and `owner` are sorted as strings
  // - `id` and `stars` as numbers
  // - `created_at` as utc date comparision

  const valA = a[type];
  const valB = b[type];
  if (order === SortOrder.ASC) {
    switch (type) {
      case ListDataType.NAME:
      case ListDataType.OWNER:
        return valA.localeCompare(valB);
      case ListDataType.ID:
      case ListDataType.STARS:
        return parseInt(valA, 10) - parseInt(valB, 10);
      case ListDataType.CREATED_AT:
        return valA > valB ? -1 : 1;
      default:
        return 0;
    }
  } else {
    switch (type) {
      case ListDataType.NAME:
      case ListDataType.OWNER:
        return valB.localeCompare(valA);
      case ListDataType.ID:
      case ListDataType.STARS:
        return parseInt(valB, 10) - parseInt(valA, 10);
      case ListDataType.CREATED_AT:
        return valB < valA ? 1 : -1;
      default:
        return 0;
    }
  }
};

export const sortedDataSelector = createSelector(
  searchResultsSelector,
  sortTypeSelector,
  (data: ISearchResult[], sortType: ISortTypePayload) => {
    const { type, order } = sortType;
    if (!data || data.length === 0) {
      return [];
    }
    const sorted: ISearchResult[] = data.sort(getSortFunction(type, order));

    // NOTE: this array must be copied
    // in other case `createSelector` doesn't detect any change
    return [...sorted];
  },
);

export const paginatedAndSortedDataSelector = createSelector(
  sortedDataSelector,
  rowsPerPageSelector,
  currentPageSelector,
  (data: ISearchResult[], rowsPerPage: number, currentPage: number) => {
    const slicedData = data.reduce((all: any, one: any, i) => {
      const ch = Math.floor(i / rowsPerPage);
      all[ch] = [].concat(all[ch] || [], one);
      return all;
    }, []);
    return slicedData[currentPage - 1] || slicedData[0];
  },
);

export const paginationPagesSelector = createSelector(
  searchResultsSelector,
  rowsPerPageSelector,
  (data: ISearchResult[], rowsPerPage: number) => {
    return data && data.length > 0 ? Math.ceil(data.length / rowsPerPage) : 1;
  },
);
