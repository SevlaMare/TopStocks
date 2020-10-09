import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './store/reducers/index';

import App from './components/App';

import './css/style.css';
import './css/navbar.css';
import './css/filter.css';
import './css/stock.css';
import './css/detail.css';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);

// import getData from './connector';
// getData()
//   .then((data) => {
//     console.log('conn check', data)
//   })
