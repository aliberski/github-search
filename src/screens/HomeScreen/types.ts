import { ViewStyle } from 'react-native';
import { INavigation } from 'constants/types';
import { ISearchResult } from 'controllers/Search/types';

export interface IProps extends INavigation {
  data: ISearchResult[];
  loading: boolean;
  searchRequest: (value: string) => void;
}

export interface IStyle {
  container: ViewStyle;
  divider: ViewStyle;
}
