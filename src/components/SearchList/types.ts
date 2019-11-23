import { IItem } from 'components/SearchList/SearchListItem/types';

export type ListDataType = 'id' | 'title' | 'owner' | 'stars' | 'createdAt';

export interface IProps {
  data: IItem[][];
  isEmpty: boolean;
}

export interface IListItem {
  index: number;
  item: IItem[];
  separators: any;
}

export interface IStyle {}
