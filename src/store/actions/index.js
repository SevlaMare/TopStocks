const fetchData = data => (
  { type: 'FETCH_DATA', data }
);

const filterData = category => (
  { type: 'FILTER_DATA', filter: category }
);

export { fetchData, filterData };
