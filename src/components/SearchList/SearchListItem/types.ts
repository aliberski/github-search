import { ViewStyle, TextStyle } from 'react-native';
import { ListDataType } from 'components/SearchList/types';

export interface IStyle {
  container: ViewStyle;
  containerHeader: ViewStyle;
  cell: ViewStyle;
  headerTouchable: ViewStyle;
  text: TextStyle;
}

export interface IItem {
  key: ListDataType;
  value: string;
}

export interface IProps {
  items: IItem[];
  onSortPress?: (key: ListDataType) => void;
  isHeader?: boolean;
}
