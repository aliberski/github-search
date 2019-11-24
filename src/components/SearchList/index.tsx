import React from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';

import SearchListItem from './SearchListItem';
import SearchListEmpty from './SearchListEmpty';

import { COLOR } from 'constants/commonStyle';
import { IProps, IListItem } from './types';
import style from './style';

const SearchList = ({ data, isEmpty, loading }: IProps) => {
  if (loading) {
    return (
      <View style={style.loader}>
        <ActivityIndicator size="large" color={COLOR.font} />
      </View>
    );
  }

  if (isEmpty) {
    return <SearchListEmpty />;
  }

  const renderItem = ({ item }: IListItem) => {
    return <SearchListItem items={item} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
    />
  );
};

SearchList.defaultProps = {
  isEmpty: true,
  loading: false,
} as Partial<IProps>;

export default SearchList;
