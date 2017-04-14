import React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';

import AppContainer from './AppContainer';
import Dashboard from '../components/Dashboard'
import HomeContainer from '../containers/HomeContainer';
import CropListContainer from '../containers/CropListContainer';

const RouteContainer = () => (
  <NativeRouter>
    <AppContainer>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/:season" exact component={CropListContainer}>
          <Route path="/:id" exact component={HomeContainer} />
        </Route>
      </Switch>
    </AppContainer>
  </NativeRouter>
);

export { RouteContainer as default };
