const FilterDataReducer = (state = '', action) => {
  if (action.type === 'FILTER_RESET') return '';

  if (action.type === 'FILTER_DATA') {
    const option = action.filtered === 'All' ? '' : action.filtered;

    return option;
  }

  return state;
};

export default FilterDataReducer;
