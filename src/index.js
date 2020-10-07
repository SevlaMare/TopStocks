import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducers/index';

import App from './components/App';

import './css/style.css';
import './css/navbar.css';
import './css/filter.css';
import './css/stock.css';

// const store = createStore(rootReducer);

ReactDOM.render(
    <App />,
  document.querySelector('#app'),
);

// API --------------------------------------------------------
import getData from './connector';

const hash = ''
const data = 'AAPL,GOOG,FB'

// last 5 days
const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${data}?timeseries=5&apikey=${hash}`


// ----- on details display all closes --------
// getData(url).then((data) => {
//   let name = data['historicalStockList'][0]['symbol'] // company name
//   let serie = data['historicalStockList'][0]['historical'] // 5 days serie
//   let close = data['historicalStockList'][0]['historical'][0]['close'] // close on day 1

//   console.log('name: ', name)
//   console.log('name: ', serie)
//   console.log('name: ', close)
// }).catch(err => console.error('not found'));

// }).catch(err => displayError(err));