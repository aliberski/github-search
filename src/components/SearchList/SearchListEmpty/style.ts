import { StyleSheet } from 'react-native';
import { IStyle } from './types';
import { defaultTextStyle, SPACING } from 'constants/commonStyle';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    paddingTop: '50%',
    alignItems: 'center',
  },
  text: {
    ...defaultTextStyle,
    paddingTop: SPACING.big,
  },
});
