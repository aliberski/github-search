// route: HOME
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ScreenWrapper from 'components/ScreenWrapper';
import SearchListItem from 'components/SearchList/SearchListItem';
import SearchInput from 'components/SearchInput';
import SearchList from 'components/SearchList';
import Divider from 'components/Divider';
import Filters from 'components/Filters';
import Pagination from 'components/Pagination';

import { ISortTypePayload } from 'controllers/SearchParams/types';
import searchActions from 'controllers/Search/actions';
import searchParamsActions from 'controllers/SearchParams/actions';
import { INavigationOptions } from 'constants/types';
import { IStoreState } from 'store/index';
import { getHeaderData } from './helpers';
import { withPaginationPages } from './HOC';
import { IProps } from './types';

const SEARCH_TIMEOUT = 1000; //ms

const HomeScreen = (props: IProps) => {
  const { t } = useTranslation();
  const headerData = getHeaderData(t);
  const { data } = props;

  const isEmpty = !data || data.length === 0;

  const renderInput = () => {
    return (
      <>
        <SearchInput
          searchTimeout={SEARCH_TIMEOUT}
          onSearch={(value: string) => {
            value && props.searchRequest(value);
          }}
          placeholder={t('Home.inputPlaceholder')}
        />
        <Divider double={true} />
      </>
    );
  };

  const renderHeader = () => {
    if (isEmpty) {
      return null;
    }
    const { sortType, setSortType } = props;
    return (
      <>
        <SearchListItem
          items={headerData}
          sortType={sortType}
          onSortPress={(sortType: ISortTypePayload) => setSortType(sortType)}
          isHeader={true}
        />
        <Divider />
      </>
    );
  };

  const renderPagination = () => {
    if (isEmpty) {
      return null;
    }
    const { currentPage, paginationPages, setCurrentPage } = props;
    return (
      <>
        <Divider />
        <Pagination
          pages={paginationPages}
          current={currentPage}
          onSelect={(page: number) => setCurrentPage(page)}
        />
      </>
    );
  };

  const renderFilters = () => {
    const { rowsPerPage, setRowsPerPage } = props;
    return (
      <>
        <Divider double={true} />
        <Filters
          rowsPerPageValue={rowsPerPage}
          onRowsPerPagePress={(rows: number) => setRowsPerPage(rows)}
        />
      </>
    );
  };

  return (
    <ScreenWrapper>
      {renderInput()}
      {renderHeader()}
      <SearchList data={data} isEmpty={isEmpty} loading={props.loading} />
      {renderPagination()}
      {renderFilters()}
    </ScreenWrapper>
  );
};

HomeScreen.navigationOptions = ({
  screenProps: { i18n },
}: INavigationOptions) => ({
  title: i18n().t('Home.title'),
});

const mapStateToProps = ({ search, searchParams }: IStoreState) => ({
  data: search.results,
  loading: search.loading,
  currentPage: searchParams.currentPage,
  rowsPerPage: searchParams.rowsPerPage,
  sortType: searchParams.sortType,
});

const mapDispatchToProps = {
  searchRequest: searchActions.searchRequest,
  setCurrentPage: searchParamsActions.setCurrentPage,
  setRowsPerPage: searchParamsActions.setRowsPerPage,
  setSortType: searchParamsActions.setSortType,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withPaginationPages,
)(HomeScreen);
