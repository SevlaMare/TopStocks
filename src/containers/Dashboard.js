import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import PropTypes from 'prop-types';

import Stock from '../components/Stock';
import Detail from '../components/Detail';

import { useSelector, useDispatch } from 'react-redux';

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

function Dashboard({ fetchedStocks, filterStock }) {
  const { path, url } = useRouteMatch();

  const fetchedData = useSelector(state => state.data);
  console.log('data1', fetchedData)
  // const dispatch = useDispatch();

  // const handleClick = book => { remove(book); };
  // const handleFilterChange = event => filterStock(event.target.value);

  return (
    <div>
      <h2>Dashboard</h2>
      {/* <ul>
        { fetchedData.map( (data, symbol) => (
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
        ))}
      </ul> */}

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

// const mapStateToProps = state => ({
//   fetchedStocks: state.book.books.filter(book => book.category === (state.filter || book.category)),
// });

// const mapDispatchToProps = dispatch => ({
//   filterStock: filter => { dispatch(filterStock(filter)); },
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Dashboard);

export default Dashboard;