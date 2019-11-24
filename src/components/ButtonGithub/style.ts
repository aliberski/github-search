import { StyleSheet } from 'react-native';
import { IStyle } from './types';
import {
  COLOR,
  BORDER_RADIUS,
  SPACING,
  defaultTextStyle,
} from 'constants/commonStyle';

export default StyleSheet.create<IStyle>({
  container: {
    backgroundColor: COLOR.font,
    borderRadius: BORDER_RADIUS.primary,
    padding: SPACING.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...defaultTextStyle,
    color: COLOR.font_light,
    paddingRight: SPACING.primary,
  },
});
