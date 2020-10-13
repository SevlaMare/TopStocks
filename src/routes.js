import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Detail from './containers/Detail';
import About from './components/About';
import Navbar from './components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />

    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/detail/:stockId" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
