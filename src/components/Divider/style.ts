import { StyleSheet } from 'react-native';
import { BORDER_WIDTH, COLOR, SPACING } from 'constants/commonStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  divider: {
    height: BORDER_WIDTH.primary,
    borderBottomColor: COLOR.border,
    borderBottomWidth: BORDER_WIDTH.primary,
    marginBottom: SPACING.primary,
    marginTop: 2,
  },
  double: {
    height: 6,
    borderTopColor: COLOR.border,
    borderTopWidth: BORDER_WIDTH.primary,
  },
});
