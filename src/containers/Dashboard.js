import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import regeneratorRuntime from "regenerator-runtime";
// import PropTypes from 'prop-types';

import Stock from '../components/Stock';
import Detail from '../components/Detail';

import { STORE_DATA, FILTER_DATA } from '../store/actions/index'
import getData from '../connector'; // fetch fx

const fetchedData = [
  {
    "symbol" : "GOOG",
    "historical" : [
      {
        "date" : "2020-10-06",
        "close" : 1453.44,
        "volume" : 1245423.0,
        "changePercent" : -1.5,
      },
      {
        "date" : "2020-10-05",
        "close" : 1486.02002,
        "volume" : 1111500.0,
        "changePercent" : 1.351,
      }
    ],
  },
  {
    "symbol" : "AAPL",
    "historical" : [
      {
        "date" : "2020-10-06",
        "close" : 113.16,
        "volume" : 1.61498212E8,
        "changePercent" : -2.195,
      },
      {
        "date" : "2020-10-05",
        "close" : 116.5,
        "volume" : 1.057208E8,
        "changePercent" : 2.274,
      }
    ]
  },
]

function Dashboard({ fetchedData, fetchedStocks, filterStock }) {
  const { path, url } = useRouteMatch();

  const data = useSelector(state => state.data); // map state
  const dispatch = useDispatch(); // map dispatch

  useEffect(() => {
    if (data.length === 0) {
      getData().then((data) => { 
        dispatch(STORE_DATA((data.historicalStockList)))
      })
    }
  }, [data])

  console.log('fetched?', data)
  console.log('fetched? 0', data[0])

  // const handleClick = book => { remove(book); };
  // const handleFilterChange = event => filterStock(event.target.value);

  let renderData = () => {
    if (data.length > 0)
      return (
        <p>YA </p>
      )

    return null;
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <ul>
        { renderData() }
        {/* { fetchedData.map( (data, symbol) => (
          <>
            <Stock key={data.id}
              title={data.symbol}
              close={data.historical[0].close}
              change={data.historical[0].changePercent}
            />

            <li key={data.id}>
              <Link to={`${url}/${data.symbol}`}>{data.symbol}</Link>
            </li>
          </>
        ))} */}
      </ul>

      <Switch>
        <Route exact path={path} />
        <Route path={`${path}/:stockId`}> <Detail /> </Route>
      </Switch>
    </div>
  );
}

// Dashboard.defaultProps = {
//   fetchedBooks: PropTypes.array,
// };

export default Dashboard;