import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

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

export default function NestingExample() {
  return (
    <Router>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Topics</Link>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/dashboard"><Dashboard /></Route>
        </Switch>
    </Router>
  );
}

function Dashboard() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Dashboard</h2>
      <Link to={`${url}/rendering`}>Rendering with React</Link>
      <Link to={`${url}/components`}>Components</Link>

      {/* { ['asd', 'dsa'].map( symbol => (
        <Link to={`${url}/${symbol}`}>{symbol}</Link>
      ))} */}

      <ul>
        { fetchedData.map( ({ stockData, symbol }) => (
          <li key={symbol}>
            <Link to={`${url}/${symbol}`}>{symbol}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={path}> <h3>Please select a topic.</h3> </Route>
        <Route path={`${path}/:stockId`}> <Stock /> </Route>
      </Switch>
    </div>
  );
}

function Stock() {
  let { stockId } = useParams(); // get end of url

  return (<h3>{stockId}</h3>);
}

function Home() { return (<h2>Home</h2>); }
