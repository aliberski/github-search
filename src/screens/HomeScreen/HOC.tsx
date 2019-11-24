import { connect } from 'react-redux';

import {
  paginatedAndSortedDataSelector,
  paginationPagesSelector,
} from 'controllers/Search/selectors';
import {
  rowsPerPageSelector,
  currentPageSelector,
  sortTypeSelector,
} from 'controllers/SearchParams/selectors';
import searchActions from 'controllers/Search/actions';
import searchParamsActions from 'controllers/SearchParams/actions';
import { IStoreState } from 'store/index';

const mapStateToProps = (state: IStoreState) => {
  return {
    data: paginatedAndSortedDataSelector(state),
    loading: state.search.loading,
    paginationPages: paginationPagesSelector(state),
    currentPage: currentPageSelector(state),
    rowsPerPage: rowsPerPageSelector(state),
    sortType: sortTypeSelector(state),
  };
};

const mapDispatchToProps = {
  searchRequest: searchActions.searchRequest,
  setCurrentPage: searchParamsActions.setCurrentPage,
  setRowsPerPage: searchParamsActions.setRowsPerPage,
  setSortType: searchParamsActions.setSortType,
};

export const withReduxData = (Component: any) => {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};
