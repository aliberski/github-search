import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/commonStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {},
  divider: {
    marginBottom: SPACING.primary,
    marginTop: 2,
  },
});
