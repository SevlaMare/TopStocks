import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from './Containers/Dashboard';
import Detail from './Containers/Detail';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Filter />

    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/detail/:stockId" component={Detail} />
    </Switch>
  </BrowserRouter>
)

export default Routes;