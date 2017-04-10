import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { bootstrapStore } from './reducers';
import RouteContainer from './containers/RouteContainer';

const store = bootstrapStore();

class WealthyEarth extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouteContainer />
      </Provider>
    );
  }
}

export { WealthyEarth as default }
