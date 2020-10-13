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

import { connect } from 'react-redux';

// function Dashboard() {
function Dashboard({data, filterStock, filtered}) {
  console.log('filtered:', filtered)
  // console.log('data from state', data)
  // const data = useSelector(state => state.data); // map state
  // const data = useSelector(state => state.data.base.filter(item => item.symbol === (state.data.filtered || item.symbol)));

  // console.log('need move this filter to map state',
  //   data.base.filter(item => item.symbol === (data.filtered || item.symbol))
  // )

  // need new var from state? was mapState, can be 2x useSelector?
  // const data2 = useSelector(state => 
  //   state.data.base.filter(item => item.symbol === (data.filtered || item.symbol)
  // ))

  // const dispatch = useDispatch(); // map dispatch
  // const handleFilterChange = event => dispatch(FILTER_DATA(event.target.value));
  const handleFilterChange = event => filterStock(event.target.value)

  useEffect(() => {
    if (data.length === 0) {
      getData().then((data) => {
        dispatch(STORE_DATA(data.historicalStockList))
      })
    }
  }, [])

  let renderData = () => {
    if (data.length > 0)
      return (
        data.map( data => (
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
      event.target.value
    return null;
  }

  return (
    <div>
      <div id="filter">
        <CategoryFilter filterCategory={filterStock('GOOG')}/>
      </div>

      <div id="dash">
        <h2>Dashboard</h2>
        <ul>{ renderData() }</ul>
      </div>
    </div>
  );
}

// export default Dashboard;
const mapStateToProps = state => ({
  data: state.data.base.filter(item => item.symbol === (state.filtered || item.symbol)),
  filtered: state.data.filtered
  //.base.filter(item => item.symbol === (state.data.filtered || item.symbol))
});

const mapDispatchToProps = dispatch => ({
  filterStock: filter => { dispatch(FILTER_DATA(filter)) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
