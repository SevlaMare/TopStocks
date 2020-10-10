import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import Dashboard from '../Containers/Dashboard';
import Navbar from './Navbar';
import Filter from './Filter';
import About from './About';

import { Provider } from 'react-redux';
import store from '../store/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Filter />

      {/* control navbar links */}
      <Route exact path="/" component={About} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  </Provider>
);

export default App;
