const FilterDataReducer = (state = '', action) => {
  if (action.type === 'FILTER_DATA') {
    const option = action.filtered === 'All' ? '' : action.filtered;

    console.log('from reducer =', option)

    return option;
  }

  return state;
};

export default FilterDataReducer;
