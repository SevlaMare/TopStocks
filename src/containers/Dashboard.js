import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

/* eslint-disable no-unused-vars */
import regeneratorRuntime from 'regenerator-runtime';
/* eslint-enable no-unused-vars */

import Stock from '../components/Stock';
import CategoryFilter from '../components/Filter';

import { STORE_DATA, FILTER_DATA, FILTER_RESET } from '../store/actions/index';
import getData from '../connector';

function Dashboard() {
  const dispatch = useDispatch(); // map dispatch

  useEffect(() => {
    getData().then(data => {
      dispatch(STORE_DATA(data.historicalStockList));
    });

    dispatch(FILTER_RESET());
  }, []);

  const data = useSelector(state => state.dataR
    .filter(item => item.symbol === (state.filterR || item.symbol))); // map state

  const handleFilterChange = event => dispatch(FILTER_DATA(event.target.value));

  const renderData = () => {
    if (data && data.length > 0) {
      return (
        data.map(data => (
          <>
            <Stock
              key={data.id}
              title={data.symbol}
              close={data.historical[0].close}
              change={data.historical[0].changePercent}
              link={<Link to={`detail/${data.symbol}`}>{data.symbol}</Link>}
            />
          </>
        ))
      );
    }

    return null;
  };

  return (
    <main>
      <article className="content">
        <section id="dash-left">
          <h2 className="title">DASHBOARD</h2>
          <div id="dash">
            { renderData() }
          </div>
        </section>

        <section id="dash-right">
          <h2 className="title">OPTIONS</h2>
          <CategoryFilter filterCategory={handleFilterChange} />
        </section>
      </article>
    </main>
  );
}

export default Dashboard;
