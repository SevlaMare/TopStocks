import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

import Navbar from './Navbar';
import Filter from './Filter';
import Stock from './Stock';
import Dashboard from "../containers/Dashboard";
import Detail from '../components/Detail'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <h1>Home</h1>

        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/detail" exact component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;