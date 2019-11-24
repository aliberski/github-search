import { ActionTypes } from './actions';
import { Actions, ISearchParamsStoreState, SortOrder } from './types';
import { ListDataType } from 'controllers/Search/types';

const defaultState: ISearchParamsStoreState = {
  currentPage: 1,
  rowsPerPage: 5,
  sortType: {
    type: ListDataType.NAME,
    order: SortOrder.ASC,
  },
};

export default (
  state: ISearchParamsStoreState = defaultState,
  action: Actions,
): ISearchParamsStoreState => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ActionTypes.SET_ROWS_PER_PAGE:
      return {
        ...state,
        rowsPerPage: action.payload,
      };
    case ActionTypes.SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};
