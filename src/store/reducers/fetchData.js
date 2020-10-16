const fetchDataReducer = (state = [], action) => {
  if (action.type === 'STORE_DATA') {
    return [...state, ...action.data];
  }

  return state;
};

export default fetchDataReducer;
