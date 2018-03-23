import {
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS,
} from '../types/items';

export function itemsHasErroredReducer(state = false, action) {
  switch (action.type) {
    case ITEMS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoadingReducer(state = false, action) {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function itemsReducer(state = [], action) {
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return action.items;

    default:
      return state;
  }
}
