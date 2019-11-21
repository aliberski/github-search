import React, { useState, useCallback, memo } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { debounce } from 'debounce';

import { IconSearch } from 'assets/svg';

import { COLOR, ICON_SIZE } from 'constants/commonStyle';
import { IProps } from './types';
import style from './style';

const SEARCH_TIMEOUT = 1000; // ms

const SearchInput = (props: IProps) => {
  const [text, setText] = useState<string>('');
  const { disabled, placeholder, onSearch } = props;

  const debounceCallback = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, SEARCH_TIMEOUT),
    [],
  );

  const onChange = (value: string) => {
    setText(value);
    debounceCallback(value);
  };

  const onSubmit = () => {
    onSearch(text);
  };

  return (
    <View style={style.container}>
      <TextInput
        onChangeText={onChange}
        value={text}
        placeholder={placeholder}
        style={style.input}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        selectionColor={COLOR.secondary}
        editable={!disabled}
      />
      <TouchableOpacity style={style.searchButton} onPress={onSubmit}>
        <IconSearch
          width={ICON_SIZE.primary}
          height={ICON_SIZE.primary}
          fill={COLOR.font}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(SearchInput);
