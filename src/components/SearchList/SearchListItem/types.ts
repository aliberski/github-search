import { ViewStyle, TextStyle } from 'react-native';
import { ISearchResult, ListDataType } from 'controllers/Search/types';

export interface IStyle {
  container: ViewStyle;
  containerHeader: ViewStyle;
  cell: ViewStyle;
  headerTouchable: ViewStyle;
  text: TextStyle;
}

export interface IProps {
  items: ISearchResult;
  onSortPress?: (key: ListDataType) => void;
  isHeader?: boolean;
}
