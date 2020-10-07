import { combineReducers } from 'redux';
import fetchStocks from './books';
import filterStocks from './filter';

export default combineReducers({
  stock: fetchStocks,
  filter: filterStocks,
});