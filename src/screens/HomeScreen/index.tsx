// route: HOME
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import ScreenWrapper from 'components/ScreenWrapper';
import SearchListItem from 'components/SearchList/SearchListItem';
import SearchInput from 'components/SearchInput';
import SearchList from 'components/SearchList';
import Divider from 'components/Divider';
import Filters from 'components/Filters';

import { searchActions } from 'controllers/Search/actions';
import { INavigationOptions } from 'constants/types';
import { IStoreState } from 'store/index';
import { getHeaderData } from './helpers';
import style from './style';
import { IProps } from './types';

const SEARCH_TIMEOUT = 1000; //ms

const HomeScreen = (props: IProps) => {
  const { t } = useTranslation();
  const headerData = getHeaderData(t);
  const { data, loading } = props;

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
        <Divider style={style.divider} double={true} />
      </>
    );
  };

  const renderHeader = () => {
    if (isEmpty) {
      return null;
    }
    return (
      <>
        <SearchListItem
          items={headerData}
          onSortPress={(key: string) => {
            // TODO: handle sorting
          }}
          isHeader={true}
        />
        <Divider style={style.divider} />
      </>
    );
  };

  return (
    <ScreenWrapper>
      {renderInput()}
      {renderHeader()}
      <SearchList data={data} isEmpty={isEmpty} loading={loading} />
      <Divider style={style.divider} double={true} />
      <Filters rowsPerPageValue={5} onRowsPerPagePress={() => {}} />
    </ScreenWrapper>
  );
};

HomeScreen.navigationOptions = ({
  screenProps: { i18n },
}: INavigationOptions) => ({
  title: i18n().t('Home.title'),
});

const mapStateToProps = ({ search }: IStoreState) => ({
  data: search.results,
  loading: search.loading,
});

const mapDispatchToProps = {
  searchRequest: searchActions.searchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
