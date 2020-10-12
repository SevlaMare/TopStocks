const STORE_DATA = data => (
  { type: 'STORE_DATA', data }
);

const FILTER_DATA = category => (
  { type: 'FILTER_DATA', filtered: category }
);

export { STORE_DATA, FILTER_DATA };
