import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  onSearch: (phrase: string) => void;
  placeholder: string;
  disabled?: boolean;
}

export interface IStyle {
  container: ViewStyle;
  searchButton: ViewStyle;
  input: ViewStyle | TextStyle;
}
