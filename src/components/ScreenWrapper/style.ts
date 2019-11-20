import { StyleSheet } from 'react-native';
import { SPACING, COLOR } from 'constants/commonStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    padding: SPACING.primary,
    backgroundColor: COLOR.background,
  },
});
