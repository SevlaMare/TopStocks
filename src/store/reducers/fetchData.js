const fetchDataReducer = (state = [], action) => {
  if (action.type === 'STORE_DATA') {
    return [...action.data];
  }

  return state;
};

export default fetchDataReducer;
