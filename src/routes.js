import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
