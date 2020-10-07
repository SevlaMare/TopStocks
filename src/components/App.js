import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

import Navbar from './Navbar';
import Filter from './Filter';
import Stock from './Stock';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/stocks" exact component={Filter} />
          <Route path="/stocks/:stock" component={Stock} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;