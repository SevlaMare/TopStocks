import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import Dashboard from '../Containers/Dashboard';
import Navbar from './Navbar';
import Filter from './Filter';
import About from './About';
import Detail from './Detail';

function App() {
  return (
    <Router>
        <Navbar />
        <Filter />

        {/* control navbar links */}
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
  );
}

export default App;
