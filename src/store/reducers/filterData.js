const INITIAL_STATE = '';

const FilterDataReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'FILTER_DATA') {
    const categ = action.filter === 'all' ? '' : action.filter;

    console.log('FILTER REDUCER OK');

    return categ;
  }

  return state;
};

export default FilterDataReducer;
