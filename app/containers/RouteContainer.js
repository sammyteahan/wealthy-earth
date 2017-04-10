import React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';

import AppContainer from './AppContainer';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard'

const RouteContainer = () => (
  <NativeRouter>
    <AppContainer>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </AppContainer>
  </NativeRouter>
);

export { RouteContainer as default };
