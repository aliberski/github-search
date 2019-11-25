import { StyleSheet } from 'react-native';
import { COLOR } from 'constants/commonStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLOR.background,
  },
});
