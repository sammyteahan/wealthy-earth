import React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';

import AppContainer from './AppContainer';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Dashboard from '../components/Dashboard';
import SeasonContainer from './SeasonContainer';

/**
 * try home route without exact and have it
 * last for specificy reasons
 */
const RouteContainer = () => (
  <NativeRouter>
    <AppContainer>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/season/:season/" component={SeasonContainer} />
        <Route path="/" component={Home} />
      </Switch>
    </AppContainer>
  </NativeRouter>
);

export { RouteContainer as default };
