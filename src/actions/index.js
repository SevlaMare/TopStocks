const fetchStocks = stock => (
  { type: 'FETCH_STOCKS', stock }
);

const filterStocks = category => (
  { type: 'CHANGE_FILTER', filter: category }
);

export { fetchStocks, filterStocks };
