const STORE_DATA = data => (
  { type: 'STORE_DATA', data }
);

const FILTER_DATA = category => (
  { type: 'FILTER_DATA', filter: category }
);

export { STORE_DATA, FILTER_DATA };
