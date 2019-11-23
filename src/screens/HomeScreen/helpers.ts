import { T } from 'constants/types';
import { IItem } from 'components/SearchList/SearchListItem/types';

export const getHeaderData = (t: T): IItem[] => [
  {
    key: 'id',
    value: t('SearchListHeader.id'),
  },
  {
    key: 'title',
    value: t('SearchListHeader.title'),
  },
  {
    key: 'owner',
    value: t('SearchListHeader.owner'),
  },
  {
    key: 'stars',
    value: t('SearchListHeader.stars'),
  },
  {
    key: 'createdAt',
    value: t('SearchListHeader.createdAt'),
  },
];
