import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './css/style.css';
import './css/navbar.css';
import './css/filter.css';
import './css/stock.css';
import './css/detail.css';
import './css/dash.css';

ReactDOM.render(<App />, document.querySelector('#app'));

// import getData from './connector';
// getData()
//   .then((data) => {
//     console.log('conn check', data)
//   })
