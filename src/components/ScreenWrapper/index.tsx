import React from 'react';
import { SafeAreaView } from 'react-native';

import { IProps } from './types';
import style from './style';

const ScreenWrapper = ({ children }: IProps) => {
  return <SafeAreaView style={style.container}>{children}</SafeAreaView>;
};

export default ScreenWrapper;
