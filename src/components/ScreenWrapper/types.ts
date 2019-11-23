import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface IProps {
  children: ReactNode;
}

export interface IStyle {
  container: ViewStyle;
  content: ViewStyle;
}
