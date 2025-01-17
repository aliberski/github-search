import { INavigation } from 'constants/types';
import { ISearchResult } from 'controllers/Search/types';
import { ISortTypePayload } from 'controllers/SearchParams/types';
import { IRepoData } from 'controllers/User/types';

export interface IProps extends INavigation {
  data: ISearchResult[];
  fullData: ISearchResult[];
  searchRequest: (value: string) => void;
  loading: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  paginationPages: number;
  sortType: ISortTypePayload;
  setSortType: (sortType: ISortTypePayload) => void;
  userRepos: IRepoData[];
}
