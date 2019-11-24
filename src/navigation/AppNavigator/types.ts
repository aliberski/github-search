import { INavigation } from 'constants/types';
import { AccessTokenType } from 'controllers/User/types';

export interface IProps extends INavigation {
  accessToken: AccessTokenType;
}
