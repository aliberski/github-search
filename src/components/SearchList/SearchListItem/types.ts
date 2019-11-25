import { ViewStyle, TextStyle } from 'react-native';
import { ISearchResult } from 'controllers/Search/types';
import { ISortTypePayload } from 'controllers/SearchParams/types';

export interface IStyle {
  container: ViewStyle;
  highlight: ViewStyle;
  containerHeader: ViewStyle;
  cell: ViewStyle;
  headerTouchable: ViewStyle;
  text: TextStyle;
  desc: ViewStyle;
}

export interface IProps {
  items: ISearchResult;
  onSortPress?: (sortType: ISortTypePayload) => void;
  sortType?: ISortTypePayload;
  isHeader?: boolean;
  highlight?: boolean;
}
