import { combineReducers } from 'redux';

import search from 'controllers/Search/reducer';
import { ISearchStoreState } from 'controllers/Search/types';

import searchParams from 'controllers/SearchParams/reducer';
import { ISearchParamsStoreState } from 'controllers/SearchParams/types';

import user from 'controllers/User/reducer';
import { IUserStoreState } from 'controllers/User/types';

export interface IStoreState {
  search: ISearchStoreState;
  searchParams: ISearchParamsStoreState;
  user: IUserStoreState;
}

export default combineReducers<IStoreState>({ search, searchParams, user });
