import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { IconArrow } from 'assets/svg';

import { ICON_SIZE, COLOR } from 'constants/commonStyle';
import { IProps } from './types';
import style from './style';

const Pagination = ({ pages, current, onSelect }: IProps) => {
  const renderArrow = (right: boolean = false) => {
    const disabled = right ? current === pages : current === 1;
    const arrowStyle = [style.arrow, right && style.arrowRight];
    return (
      <TouchableOpacity
        style={arrowStyle}
        disabled={disabled}
        onPress={() => {
          const value = right ? current + 1 : current - 1;
          onSelect(value);
        }}>
        <IconArrow
          width={ICON_SIZE.primary}
          height={ICON_SIZE.primary}
          fill={COLOR.font}
        />
      </TouchableOpacity>
    );
  };

  const renderButton = (num: number) => {
    const selected = num === current;
    const textStyle = [style.text, selected && style.textSelected];
    return (
      <TouchableOpacity
        key={num}
        disabled={selected}
        style={style.button}
        onPress={() => {
          onSelect(num);
        }}>
        <Text style={textStyle}>{num}</Text>
      </TouchableOpacity>
    );
  };

  const renderPagination = () => {
    return new Array(pages)
      .fill(0)
      .map((_: any, i: number) => renderButton(i + 1));
  };

  return (
    <View style={style.container}>
      {renderArrow()}
      {renderPagination()}
      {renderArrow(true)}
    </View>
  );
};

Pagination.defaultProps = {
  current: 1,
  pages: 1,
} as Partial<IProps>;

export default memo(Pagination);
