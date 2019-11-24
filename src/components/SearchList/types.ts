import { ViewStyle } from 'react-native';
import { ISearchResult } from 'controllers/Search/types';

export interface IProps {
  data: ISearchResult[];
  isEmpty: boolean;
  loading: boolean;
}

export interface IListItem {
  index: number;
  item: ISearchResult;
  separators: any;
}

export interface IStyle {
  loader: ViewStyle;
}
