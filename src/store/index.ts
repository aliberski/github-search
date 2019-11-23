import { combineReducers } from 'redux';

import search from 'controllers/Search/reducer';
import { ISearchStoreState } from 'controllers/Search/types';

export interface IStoreState {
  search: ISearchStoreState;
}

export default combineReducers<IStoreState>({ search });
