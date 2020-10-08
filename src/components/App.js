import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import Navbar from './Navbar';
import Dashboard from '../Containers/Dashboard';
import Filter from './Filter';
import About from './About';
import Stock from './Stock';
import Detail from './Detail';

function App() {
  return (
    <Router>
        <Navbar />
        <Filter />

        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/detail/:stockId" component={Detail} />
        </Switch>
    </Router>
  );
}

export default App;
