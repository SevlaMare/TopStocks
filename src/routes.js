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
      <Route exact path="/" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/detail/:stockId" component={Detail} />
    </Switch>
  </BrowserRouter>
)

export default Routes;