import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface IProps {
  children: ReactNode;
  style?: ViewStyle;
}

export interface IStyle {
  container: ViewStyle;
}
