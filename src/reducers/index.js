import { combineReducers } from 'redux';
import {
  itemsReducer,
  itemsHasErroredReducer,
  itemsIsLoadingReducer,
} from './items';

export default combineReducers({
  items: itemsReducer,
  itemsHasErrored: itemsHasErroredReducer,
  itemsIsLoading: itemsIsLoadingReducer,
});
