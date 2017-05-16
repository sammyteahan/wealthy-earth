import React, { Component } from 'react';
import { ListView } from 'react-native';

import { Switch, Route } from 'react-router-native';

import { ListGroup } from '../components/common';
import SeasonDetail from '../components/season/SeasonDetail';

class SeasonContainer extends Component {
  constructor(props) {
    super(props);

    this.renderDefaultScene = this.renderDefaultScene.bind(this);
    // this.renderChildHeaders = this.renderChildHeaders.bind(this);
    // this.renderChildRoutes = this.renderChildRoutes.bind(this);
  }

  renderDefaultScene() {
    return <SeasonDetail />
  }

  // renderChildHeaders() {
  //   <Switch location={this.props.location}>
  //     <Route
  //       path=""
  //       render=
  //     />
  //   </Switch>
  // }

  renderChildRoutes() {}

  render() {
    return <SeasonDetail />
  }
}

export { SeasonContainer as default };
