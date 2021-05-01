import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './screens/Dashboard';


const appName = 'AppName';

export const Router = () => {

  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </>
    </BrowserRouter>
  );
};
