import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { IconGithub } from 'assets/svg';

import { IProps } from './types';
import style from './style';
import { COLOR, ICON_SIZE } from 'constants/commonStyle';

const ButtonGithub = ({ onPress, text }: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <Text style={style.text}>{text}</Text>
      <IconGithub
        width={ICON_SIZE.primary}
        height={ICON_SIZE.primary}
        fill={COLOR.font_light}
      />
    </TouchableOpacity>
  );
};

export default ButtonGithub;
