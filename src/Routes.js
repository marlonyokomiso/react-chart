import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ChartOne from './pages/charts'

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route component={ChartOne} path="/" exact />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;