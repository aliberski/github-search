import { ViewStyle } from 'react-native';
import { INavigation } from 'constants/types';
import { AccessTokenType } from 'controllers/User/types';

export interface IProps extends INavigation {
  setAccessToken: (accessToken: AccessTokenType) => void;
}

export interface IStyle {
  container: ViewStyle;
}
