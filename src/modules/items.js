import { combineReducers } from 'redux';

// Actions
const HAS_ERRORED = 'redux-thunk-sample/items/HAS_ERRORED';
const IS_LOADING = 'redux-thunk-sample/items/IS_LOADING';
const FETCH_DATA_SUCCESS = 'redux-thunk-sample/items/FETCH_DATA_SUCCESS';
const REMOVE_ITEM = 'redux-thunk-sample/items/REMOVE_ITEM';

// Reducers
function hasErroredReducer(state = false, action) {
  switch (action.type) {
    case HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

function isLoadingReducer(state = false, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

function dataReducer(state = [], action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.items;

    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.itemId);

    default:
      return state;
  }
}

export default combineReducers({
  data: dataReducer,
  hasErrored: hasErroredReducer,
  isLoading: isLoadingReducer,
});

// Action Creators
export function hasErrored(bool) {
  return {
    type: HAS_ERRORED,
    hasErrored: bool,
  };
}

export function isLoading(bool) {
  return {
    type: IS_LOADING,
    isLoading: bool,
  };
}

export function fetchDataSuccess(items) {
  return {
    type: FETCH_DATA_SUCCESS,
    items,
  };
}

export function removeItem(itemId) {
  return {
    type: REMOVE_ITEM,
    itemId,
  };
}

export const fetchData = url => (dispatch) => {
  dispatch(isLoading(true));

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(isLoading(false));

      return response;
    })
    .then(response => response.json())
    .then(items => dispatch(fetchDataSuccess(items)))
    .catch(() => dispatch(hasErrored(true)));
};
