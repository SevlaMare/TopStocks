import React from "react";
// import PropTypes from 'prop-types';

import Stock from '../components/Stock'

const fetchedData = [
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
  }
]

const Dashboard = () => {
  return (
    <>
      { fetchedData.map(data => (
        <Stock key={data.id}
          title={data.symbol}
          close={data.historical[0].close}
          change={data.historical[0].changePercent}
        >
        </Stock>
      ))}
    </>
  );
}

export default Dashboard;