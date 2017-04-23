import React from 'react';
import { View, Text } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';

import AppContainer from './AppContainer';
import Dashboard from '../components/Dashboard'
import HomeContainer from '../containers/HomeContainer';
import CropListContainer from '../containers/CropListContainer';
import CropDetail from '../components/crop/CropDetail';

const RouteContainer = () => (
  <NativeRouter>
    <AppContainer>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/seasons/:season" component={CropListContainer} />
        {/* <Route path="/crops/:id" exact component={CropDetail} /> */}

        {/* Catch all component */}
        <Route render={({ match, location }) => (
          <View style={{ marginTop: 40 }}>
            <Text>No route match for: match: {match.url}, location: {location.pathname}</Text>
          </View>
        )} />
      </Switch>
    </AppContainer>
  </NativeRouter>
);

export { RouteContainer as default };
