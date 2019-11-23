import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IconList } from 'assets/svg';

import { ICON_SIZE, COLOR } from 'constants/commonStyle';
import style from './style';

const SearchListEmpty = () => {
  const { t } = useTranslation();

  return (
    <View style={style.container}>
      <IconList
        width={ICON_SIZE.big}
        height={ICON_SIZE.big}
        fill={COLOR.font}
      />
      <Text style={style.text}>{t('SearchListEmpty.title')}</Text>
    </View>
  );
};

export default SearchListEmpty;
