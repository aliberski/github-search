import { ViewStyle } from 'react-native';
import { ISearchResult } from 'controllers/Search/types';
import { IRepoData } from 'controllers/User/types';

export interface IProps {
  data: ISearchResult[];
  isEmpty: boolean;
  loading: boolean;
  userRepos: IRepoData[];
}

export interface IListItem {
  index: number;
  item: ISearchResult;
  separators: any;
}

export interface IStyle {
  loader: ViewStyle;
}
