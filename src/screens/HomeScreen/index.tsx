// route: HOME
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import ScreenWrapper from 'components/ScreenWrapper';
import SearchListItem from 'components/SearchList/SearchListItem';
import SearchInput from 'components/SearchInput';
import SearchList from 'components/SearchList';
import Divider from 'components/Divider';
import Filters from 'components/Filters';
import Pagination from 'components/Pagination';

import { withReduxData } from './HOC';
import { INavigationOptions } from 'constants/types';
import { ISortTypePayload } from 'controllers/SearchParams/types';
import { getHeaderData } from './helpers';
import { IProps } from './types';

const SEARCH_TIMEOUT = 1000; //ms

const HomeScreen = (props: IProps) => {
  const { t } = useTranslation();
  const headerData = getHeaderData(t);
  const { data, paginationPages, currentPage, setCurrentPage } = props;

  const isEmpty = !data || data.length === 0;

  useEffect(() => {
    if (paginationPages < currentPage) {
      setCurrentPage(1);
    }
  }, [paginationPages]);

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

export default withReduxData(HomeScreen);
