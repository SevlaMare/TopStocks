// import regeneratorRuntime from 'regenerator-runtime';

import STOCKS_LIST from './constants';

const hash = '45bbdf406af931409d2dc246ff196ae0';
const list = Object.keys(STOCKS_LIST).join();
const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${list}?timeseries=5&apikey=${hash}`;

const getData = async () => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export default getData;
