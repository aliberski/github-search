import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  rowsPerPageValue: number;
  onRowsPerPagePress: (value: number) => void;
}

export interface IStyle {
  container: ViewStyle;
  title: TextStyle;
  buttons: ViewStyle;
  button: ViewStyle;
  buttonSelected: ViewStyle;
  buttonText: TextStyle;
}
