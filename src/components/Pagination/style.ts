import { StyleSheet } from 'react-native';
import {
  SPACING,
  defaultTextStyle,
  COLOR,
  BORDER_WIDTH,
  BORDER_RADIUS,
} from 'constants/commonStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.primary,
  },
  button: {
    paddingVertical: SPACING.small,
    paddingHorizontal: 3,
  },
  arrow: {
    padding: SPACING.primary,
  },
  arrowRight: {
    transform: [{ rotate: '180deg' }],
  },
  text: {
    ...defaultTextStyle,
    padding: SPACING.small,
  },
  textSelected: {
    borderWidth: BORDER_WIDTH.primary,
    borderColor: COLOR.font,
    borderRadius: BORDER_RADIUS.primary,
  },
});
