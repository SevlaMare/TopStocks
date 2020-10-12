import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import regeneratorRuntime from "regenerator-runtime";

// components
import Stock from '../components/Stock';
import CategoryFilter from '../components/Filter';

// actions
import { STORE_DATA, FILTER_DATA } from '../store/actions/index'
import getData from '../connector'; // fetch fx


function Dashboard() {
  const data = useSelector(state => state.data); // map state
  console.log('state?', data)
  const dispatch = useDispatch(); // map dispatch

  const handleFilterChange = event => dispatch(FILTER_DATA(event.target.value));

  useEffect(() => {
    if (data.length === 0) {
      getData().then((data) => {
        dispatch(STORE_DATA(data.historicalStockList))
      })
    }
  }, [])


  console.log('stock arrays', data.base)
  console.log('filter ok?',  data.base.filter(item => item.symbol === 'AAPL'))
  // data.filter(item => item.symbol === (data.filter || item.symbol))


  let renderData = () => {
    if (data.length > 0)
      return (
        data[0].map( data => (
          <>
            <Stock key={data.id}
              title={data.symbol}
              close={data.historical[0].close}
              change={data.historical[0].changePercent}
            />

            <li key={data.id}>
              <Link to={`detail/${data.symbol}`}>{data.symbol}</Link>
            </li>
          </>
        ))
      )

    return null;
  }

  return (
    <div>
      <div id="filter">
        <CategoryFilter filterCategory={handleFilterChange}/>
      </div>

      <div id="dash">
        <h2>Dashboard</h2>
        <ul>{ renderData() }</ul>
      </div>
    </div>
  );
}

export default Dashboard;