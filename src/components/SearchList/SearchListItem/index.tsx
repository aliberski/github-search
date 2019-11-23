import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { IconSort } from 'assets/svg';

import { ListDataType } from 'controllers/Search/types';
import { BORDER_WIDTH, ICON_SIZE, COLOR } from 'constants/commonStyle';
import { IProps } from './types';
import style from './style';

const SearchListItem = (props: IProps) => {
  const { isHeader } = props;
  const borderWidth = isHeader ? BORDER_WIDTH.big : BORDER_WIDTH.primary;

  const renderText = (value: string) => {
    const fontWeight = isHeader ? 'bold' : 'normal';
    return (
      <Text style={[style.text, { fontWeight }]} numberOfLines={2}>
        {value}
      </Text>
    );
  };

  const renderCell = (key: ListDataType, value: string, isLast?: boolean) => {
    const { onSortPress } = props;

    const cellStyle = [
      style.cell,
      { borderRightWidth: isLast ? 0 : borderWidth },
    ];

    if (isHeader) {
      return (
        <View key={`${key}-${value}`} style={cellStyle}>
          <TouchableOpacity
            style={style.headerTouchable}
            onPress={() => {
              onSortPress && onSortPress(key);
            }}>
            {renderText(value)}
            <IconSort
              width={ICON_SIZE.small}
              height={ICON_SIZE.small}
              fill={COLOR.font}
            />
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View key={key} style={cellStyle}>
        {renderText(value)}
      </View>
    );
  };

  const renderItems = () => {
    const { items } = props;
    const keys: any[] = Object.keys(items);
    return keys.map((key: ListDataType, i: number) => {
      const isLast = keys.length === i + 1;
      const value = items[key];
      return renderCell(key, value, isLast);
    });
  };

  const containerStyle = [
    style.container,
    isHeader && style.containerHeader,
    { borderWidth },
  ];

  return <View style={containerStyle}>{renderItems()}</View>;
};

export default memo(SearchListItem);
