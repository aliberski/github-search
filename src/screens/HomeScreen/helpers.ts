import { T } from 'constants/types';
import { ISearchResult } from 'controllers/Search/types';

export const getHeaderData = (t: T): ISearchResult => ({
  id: t('SearchListHeader.id'),
  name: t('SearchListHeader.name'),
  owner: t('SearchListHeader.owner'),
  stars: t('SearchListHeader.stars'),
  createdAt: t('SearchListHeader.createdAt'),
});
