// route: AUTH
import React from 'react';
import { View, Text } from 'react-native';

import { IProps } from './types';
import style from './style';

const AuthScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Text>AuthScreen</Text>
    </View>
  );
};

export default AuthScreen;
