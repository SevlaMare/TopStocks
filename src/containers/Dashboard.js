import React from "react";
// import PropTypes from 'prop-types';

import Stock from '../components/Stock';
// import Detail from '../components/Detail';

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

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Detail = () => {
  // const stock = fetchedData.find(
  //   ({ symbol }) => symbol === match.params.stockId
  // )

  return (
    <div>
      <h3>Requested stock ID</h3>
    </div>
  );
}

const Dashboard = ({ match }) => {
  console.log('SEE THIS', match)

  return (
    <div>
      <p>ON DASH DASH</p>
      <ul>
        { fetchedData.map( ({ stockData, symbol }) => (
          <li key={symbol}>
            <Link to={`${match.url}/${symbol}`}>{symbol}</Link>
          </li>
        ))}
      </ul>

      {/* <Route
        path={`/${match.url}/:stockId`}
        render={ (props) => <Detail data={fetchedData} {...props} />}
      /> */}

      <Route
        path="/dashboard/:stockId"
        render={ (props) => <Detail {...props}
        data={fetchedData}/>}
      />
    </div>
  )
}

export default Dashboard;