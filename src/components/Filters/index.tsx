import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IProps } from './types';
import style from './style';

const AVAILABLE_ROWS_PER_PAGE = [5, 10, 15, 20];

const Filters = (props: IProps) => {
  const { t } = useTranslation();

  const renderButton = (value: number) => {
    const { rowsPerPageValue, onRowsPerPagePress } = props;
    const selected = rowsPerPageValue === value;
    const buttonStyle = [style.button, selected && style.buttonSelected];
    return (
      <TouchableOpacity
        key={value}
        style={buttonStyle}
        disabled={selected}
        onPress={() => onRowsPerPagePress(value)}>
        <Text style={style.buttonText}>{value}</Text>
      </TouchableOpacity>
    );
  };

  const renderButtons = () => {
    return AVAILABLE_ROWS_PER_PAGE.map((value: number) => renderButton(value));
  };

  return (
    <>
      <Text style={style.title}>{t('Filters.title')}</Text>
      <View style={style.buttons}>{renderButtons()}</View>
    </>
  );
};

Filters.defaultProps = {
  rowsPerPageValue: 5,
} as Partial<IProps>;

export default memo(Filters);
