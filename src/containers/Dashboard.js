import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import regeneratorRuntime from 'regenerator-runtime';

// components
import Stock from '../components/Stock';
import CategoryFilter from '../components/Filter';

// actions
import { STORE_DATA, FILTER_DATA } from '../store/actions/index';
import getData from '../connector'; // fetch fx

function Dashboard() {
  const data = useSelector(state => state.dataR.base
    .filter(item => item.symbol === (state.filterR || item.symbol))); // map state

  const dispatch = useDispatch(); // map dispatch

  const handleFilterChange = event => dispatch(FILTER_DATA(event.target.value));

  useEffect(() => {
    if (data.length === 0) {
      getData().then(data => {
        dispatch(STORE_DATA(data.historicalStockList));
      });
    }
  }, []);

  const renderData = () => {
    if (data.length > 0) {
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
      <div id="filter">
        <CategoryFilter filterCategory={handleFilterChange} />
      </div>

      <h2 className="title">Dashboard</h2>
      <div id="dash">
        { renderData() }
      </div>
    </main>
  );
}

export default Dashboard;
