import { combineReducers } from 'redux';

import fetchDataReducer from './fetchData';
import filterDataReducer from './filterData';

const allReducers = combineReducers({
  dataR: fetchDataReducer,
  filterR: filterDataReducer,
});

export default allReducers;