// route: HOME
import React from 'react';
import { useTranslation } from 'react-i18next';

import ScreenWrapper from 'components/ScreenWrapper';
import SearchListItem from 'components/SearchList/SearchListItem';
import SearchInput from 'components/SearchInput';
import SearchList from 'components/SearchList';
import Divider from 'components/Divider';

import { INavigationOptions } from 'constants/types';
import { getHeaderData } from './helpers';
import style from './style';
import { IProps } from './types';

const SEARCH_TIMEOUT = 1000; //ms

// TODO: delete data mock
const data: any = [
  [
    {
      key: 'id',
      value: '69101782',
    },
    {
      key: 'title',
      value: 'react-native-fbads',
    },
    {
      key: 'owner',
      value: 'callstack-io',
    },
    {
      key: 'stars',
      value: '88',
    },
    {
      key: 'createdAt',
      value: '2016.09.24',
    },
  ],
  [
    {
      key: 'id',
      value: '123',
    },
    {
      key: 'title',
      value: 'react-native-123',
    },
    {
      key: 'owner',
      value: 'owner-123',
    },
    {
      key: 'stars',
      value: '123',
    },
    {
      key: 'createdAt',
      value: '1.1.1',
    },
  ],
];

const HomeScreen = (props: IProps) => {
  const { t } = useTranslation();
  const headerData = getHeaderData(t);

  const isEmpty = !data || data.length === 0;

  const renderInput = () => {
    return (
      <>
        <SearchInput
          searchTimeout={SEARCH_TIMEOUT}
          onSearch={(value: string) => {
            console.log('onSearch', value);
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
      <SearchList data={data} isEmpty={isEmpty} />
    </ScreenWrapper>
  );
};

HomeScreen.navigationOptions = ({
  screenProps: { i18n },
}: INavigationOptions) => ({
  title: i18n().t('Home.title'),
});

export default HomeScreen;
