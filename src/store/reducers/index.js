import { combineReducers } from 'redux';

import fetchDataReducer from './fetchData';
import filterDataReducer from './filterData';

const allReducers = combineReducers({
  data: fetchDataReducer,
  filter: filterDataReducer,
});

export default allReducers;