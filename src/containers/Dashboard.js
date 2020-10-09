import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import regeneratorRuntime from "regenerator-runtime";

import Stock from '../components/Stock';
import Detail from './Detail';

import { STORE_DATA, FILTER_DATA } from '../store/actions/index'
import getData from '../connector'; // fetch fx

function Dashboard() {
  const { path, url } = useRouteMatch();

  const data = useSelector(state => state.data); // map state
  const dispatch = useDispatch(); // map dispatch

  useEffect(() => {
    if (data.length === 0) {
      getData().then((data) => { 
        dispatch(STORE_DATA((data.historicalStockList)))
      })
    }
  }, [])

  // const handleClick = book => { remove(book); };
  // const handleFilterChange = event => filterStock(event.target.value);

  let renderData = () => {
    if (data.length > 0)
      return (
        data[0].map( (data, symbol) => (
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
        ))
      )

    return null;
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <ul>{ renderData() }</ul>

      <Switch>
        <Route exact path={path} />
        {/* render detail component when url match */}
        <Route path={`${path}/:stockId`} component={Detail} />
      </Switch>
    </div>
  );
}

export default Dashboard;