import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

import Navbar from './Navbar';
import Filter from './Filter';
import Stock from './Stock';
import Dashboard from "../containers/Dashboard";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
        <Filter></Filter>

        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/stocks/:stock" component={Stock} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;