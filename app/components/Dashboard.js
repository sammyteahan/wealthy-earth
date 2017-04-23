import React, { Component } from 'react';
import { ScrollView, View, Text, Animated, TouchableOpacity } from 'react-native';

import { defaultMemoize } from 'reselect';
import styled from 'styled-components/native';
import { Route, Switch, Link } from 'react-router-native';

import CropDetail from './crop/CropDetail';
import TestComponent from './Test';
import { Header, DefaultHeader, Content, Centered, ListGroupItem, ListGroup } from './common';
import { AnimatedChild, AnimatedParent, AnimatedContainer, AnimatedChildHeader, AnimatedParentHeader } from './animation';

const Container = styled.View`
  flex: 1;
`;

class InternalContainer extends Component {
  render() {
    const { match, location, animation, animating } = this.props;

    return (
      <Container>
        <AnimatedParentHeader animation={animation}>
          <DefaultHeader url={match.url} title={'Dashboard'} />
        </AnimatedParentHeader>
        <AnimatedChildHeader
          animation={animation}
          atParent={match.isExact}
          animating={animating}
        >
          <Switch location={location}>
            <Route
              path="/dashboard/graphs"
              render={props => <Header title="GRAPHS" {...props} />}
            />
            <Route
              path="/dashboard/charts"
              render={props => <Header title="CHARTS" {...props} />}
            />
          </Switch>
        </AnimatedChildHeader>
        <AnimatedParent animation={animation}>
          <View style={{
            flex: 1,
            backgroundColor: 'steelblue',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Link to="/dashboard/graphs" component={TouchableOpacity}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>to /dashboard/graphs</Text>
            </Link>
          </View>
        </AnimatedParent>
        <AnimatedChild
          animation={animation}
          animating={animating}
          atParent={match.isExact}
        >
          <Switch location={location}>
            <Route path="/dashboard/graphs" component={TestComponent} />
          </Switch>
        </AnimatedChild>
      </Container>
    );
  }
}

const Dashboard = AnimatedContainer(InternalContainer);

export { Dashboard as default };
