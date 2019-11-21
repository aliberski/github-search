// route: HOME
import React from 'react';
import { useTranslation } from 'react-i18next';

import ScreenWrapper from 'components/ScreenWrapper';
import SearchListItem from 'components/SearchList/SearchListItem';
import SearchInput from 'components/SearchInput';
import Divider from 'components/Divider';

import { INavigationOptions } from 'constants/types';
import { getHeaderData } from './helpers';
import style from './style';
import { IProps } from './types';

const HomeScreen = (props: IProps) => {
  const { t } = useTranslation();
  const headerData = getHeaderData(t);

  return (
    <ScreenWrapper>
      <SearchInput
        onSearch={(value: string) => {
          console.log('onSearch', value);
        }}
        placeholder={t('Home.inputPlaceholder')}
      />
      <Divider style={style.divider} double={true} />
      <SearchListItem
        items={headerData}
        onSortPress={(key: string) => {
          // TODO: handle sorting
        }}
        isHeader={true}
      />
      <Divider style={style.divider} />
      <SearchListItem
        items={[
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
        ]}
      />
      <SearchListItem
        items={[
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
        ]}
      />
    </ScreenWrapper>
  );
};

HomeScreen.navigationOptions = ({
  screenProps: { i18n },
}: INavigationOptions) => ({
  title: i18n().t('Home.title'),
});

export default HomeScreen;
