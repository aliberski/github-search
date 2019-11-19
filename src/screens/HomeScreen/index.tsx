// route: HOME
import React from 'react';
import { View, Text } from 'react-native';
import { getI18n } from 'react-i18next';

import { IProps } from './types';
import style from './style';

const HomeScreen = (props: IProps) => {
  return <View style={style.container}></View>;
};

HomeScreen.navigationOptions = {
  title: getI18n().t('Home.title'),
};

export default HomeScreen;
