import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

import Navbar from './Navbar';
import Filter from './Filter';
import Stock from './Stock';
import Dashboard from "../containers/Dashboard";
import Detail from './Detail'

function Home() { return <h1>Home</h1>; }

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar></Navbar> */}
        <nav className="flex">
          <Link to="/">Home</Link>
          <Link to="/dashboard">DashBoard</Link>
        </nav>

        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />

        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/detail" component={Detail} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;