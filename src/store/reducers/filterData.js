const INITIAL_STATE = '';

const FilterDataReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'CHANGE_FILTER') {
    const categ = action.filter === 'all' ? '' : action.filter;
    return categ;
  }

  return state;
};

export default FilterDataReducer;
