// route: HOME
import React from 'react';
import { Text } from 'react-native';

import ScreenWrapper from 'components/ScreenWrapper';

import { INavigationOptions } from 'constants/types';
import { IProps } from './types';
import style from './style';

const HomeScreen = (props: IProps) => {
  return (
    <ScreenWrapper style={style.container}>
      <Text>HomeScreen</Text>
    </ScreenWrapper>
  );
};

HomeScreen.navigationOptions = ({
  screenProps: { i18n },
}: INavigationOptions) => ({
  title: i18n().t('Home.title'),
});

export default HomeScreen;
