// route: HOME
import React from 'react';
import { View, Text } from 'react-native';

import { IProps } from './types';
import style from './style';

const HomeScreen = (props: IProps) => {
  return <View style={style.container}></View>;
};

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
