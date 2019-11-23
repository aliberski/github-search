import { StyleSheet } from 'react-native';
import { IStyle } from './types';
import {
  BORDER_RADIUS,
  COLOR,
  SPACING,
  FONT_SIZE,
  shadowStyle,
} from 'constants/commonStyle';

export default StyleSheet.create<IStyle>({
  container: {
    height: 40,
    borderRadius: BORDER_RADIUS.primary,
    marginBottom: SPACING.primary,
    marginTop: SPACING.small,
    backgroundColor: 'white',
    justifyContent: 'center',
    ...shadowStyle,
  },
  input: {
    flex: 1,
    color: COLOR.font,
    fontSize: FONT_SIZE.primary,
    fontWeight: 'bold',
    paddingLeft: SPACING.primary,
    paddingRight: 35,
  },
  searchButton: {
    position: 'absolute',
    right: 0,
    padding: SPACING.primary,
  },
});
