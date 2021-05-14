import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DescriptionPage from './pages/DescriptionPage';
import HomePage from './pages/HomePage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/description" component={DescriptionPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
