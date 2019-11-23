import React, { memo } from 'react';
import { FlatList } from 'react-native';

import SearchListItem from './SearchListItem';
import SearchListEmpty from './SearchListEmpty';

import { IProps, IListItem } from './types';

const SearchList = ({ data, isEmpty }: IProps) => {
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
      keyExtractor={item => `${item[0].value}`}
    />
  );
};

export default memo(SearchList);
