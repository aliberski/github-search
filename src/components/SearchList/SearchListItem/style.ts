import { StyleSheet } from 'react-native';
import {
  FONT_SIZE,
  COLOR,
  SPACING,
  BORDER_RADIUS,
  BORDER_WIDTH,
  shadowStyle,
} from 'constants/commonStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flexDirection: 'row',
    backgroundColor: COLOR.primary,
    borderRadius: BORDER_RADIUS.primary,
    marginBottom: SPACING.primary,
    borderWidth: BORDER_WIDTH.primary,
    borderColor: COLOR.border,
  },
  containerHeader: {
    ...shadowStyle,
  },
  cell: {
    width: 0,
    flexGrow: 1,
    borderRightColor: COLOR.border,
    borderRightWidth: 1,
    justifyContent: 'center',
  },
  headerTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FONT_SIZE.small,
    color: COLOR.font,
    paddingHorizontal: SPACING.small,
    paddingVertical: SPACING.primary,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  desc: {
    transform: [{ rotate: '180deg' }],
  },
});
