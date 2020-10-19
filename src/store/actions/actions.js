const STORE_DATA = data => (
  { type: 'STORE_DATA', data }
);

const FILTER_DATA = category => (
  { type: 'FILTER_DATA', filtered: category }
);

const FILTER_RESET = () => (
  { type: 'FILTER_RESET', filtered: '' }
);

export { STORE_DATA, FILTER_DATA, FILTER_RESET };
