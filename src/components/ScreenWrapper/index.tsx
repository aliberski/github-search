import React from 'react';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';

import { IProps } from './types';
import style from './style';

const ScreenWrapper = ({ children }: IProps) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
