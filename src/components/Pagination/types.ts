import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  pages: number;
  current: number;
  onSelect: (value: number) => void;
}

export interface IStyle {
  container: ViewStyle;
  button: ViewStyle;
  arrow: ViewStyle;
  arrowRight: ViewStyle;
  text: TextStyle;
  textSelected: TextStyle;
}
