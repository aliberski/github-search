import { StyleSheet } from 'react-native';
import {
  defaultTextStyle,
  SPACING,
  shadowStyle,
  BORDER_WIDTH,
  BORDER_RADIUS,
  COLOR,
} from 'constants/commonStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  title: {
    ...defaultTextStyle,
    fontWeight: 'bold',
    paddingBottom: SPACING.primary,
  },
  buttons: {
    flexDirection: 'row',
    paddingTop: SPACING.small,
  },
  button: {
    ...shadowStyle,
    padding: SPACING.primary,
    marginHorizontal: SPACING.small,
    borderWidth: BORDER_WIDTH.primary,
    borderRadius: BORDER_RADIUS.primary,
    borderColor: COLOR.border,
    minWidth: 45,
    backgroundColor: COLOR.primary,
  },
  buttonSelected: {
    backgroundColor: COLOR.border,
  },
  buttonText: {
    ...defaultTextStyle,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
