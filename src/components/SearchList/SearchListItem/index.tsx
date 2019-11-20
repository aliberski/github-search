import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { BORDER_WIDTH } from 'constants/commonStyle';
import { ListDataType } from 'components/SearchList/types';
import { IProps, IItem } from './types';
import style from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchListItem = (props: IProps) => {
  const { isHeader } = props;

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
      { borderRightWidth: isLast ? 0 : BORDER_WIDTH.primary },
    ];

    if (isHeader) {
      return (
        <View key={key} style={cellStyle}>
          <TouchableOpacity
            onPress={() => {
              onSortPress && onSortPress(key);
            }}>
            {renderText(value)}
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
    return items.map(({ key, value }: IItem, i: number) => {
      const isLast = items.length === i + 1;
      return renderCell(key, value, isLast);
    });
  };

  return <View style={style.container}>{renderItems()}</View>;
};

export default memo(SearchListItem);
