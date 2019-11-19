// route: HOME
import React from 'react';
import { View, Text } from 'react-native';

import { IProps } from './types';
import style from './style';

const AHomecreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
