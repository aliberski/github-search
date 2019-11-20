// route: HOME
import React from 'react';
import { View, Text } from 'react-native';

import { INavigationOptions } from 'constants/types';
import { IProps } from './types';
import style from './style';

const HomeScreen = (props: IProps) => {
  return <View style={style.container}></View>;
};

HomeScreen.navigationOptions = ({
  screenProps: { i18n },
}: INavigationOptions) => ({
  title: i18n().t('Home.title'),
});

export default HomeScreen;
