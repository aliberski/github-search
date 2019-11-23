import React from 'react';
import { View } from 'react-native';

import { IProps } from './types';
import style from './style';

const Divider = ({ style: propsStyle, double }: IProps) => {
  return <View style={[style.divider, double && style.double, propsStyle]} />;
};

export default Divider;
