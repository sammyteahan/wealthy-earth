import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Text, Animated, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import { Switch, Route, Link } from 'react-router-native';

import { AnimatedChild, AnimatedParent, AnimatedContainer, AnimatedChildHeader, AnimatedParentHeader } from './animation';
import { Header, DefaultHeader, BuiltIcon, Content } from './common';
import Graph from './Graph';
import Notifications from './Notifications';

const Container = styled.View`
  flex: 1;
  overflow: hidden;
  padding-bottom: 60;
`;

const LinkContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20;
`;

class InternalContainer extends Component {
  render() {
    const { match, location, animating, animation } = this.props;

    return (
      <Container>
        <AnimatedParentHeader animation={animation}>
          <DefaultHeader url={match.url} title="Wealthy Earth" />
        </AnimatedParentHeader>
        <AnimatedChildHeader animation={animation} atParent={match.isExact} animating={animating}>
          <Switch location={location}>
            <Route path="/dashboard/graphs" render={props => <Header title="GRAPHS" {...props} />} />
            <Route path="/dashboard/notifications" render={props => <Header title="NOTIFICATIONS" {...props} />} />
            <Route path="/dashboard/common" render={props => <Header title="SHOWCASE" {...props} />} />
          </Switch>
        </AnimatedChildHeader>
        <AnimatedParent animation={animation}>
          <ScrollView>
            <Content>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce varius iaculis dolor, sit amet fringilla ante suscipit ut.
              Vestibulum a pellentesque sem, sodales interdum sem.
              Donec in justo at leo laoreet semper. Fusce id lorem sit amet mauris vulputate
              mattis. Duis quis faucibus dolor. Mauris scelerisque justo ut metus
              consectetur pretium. Nulla facilisi.</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce varius iaculis dolor, sit amet fringilla ante suscipit ut.
              Vestibulum a pellentesque sem, sodales interdum sem.
              Donec in justo at leo laoreet semper. Fusce id lorem sit amet mauris vulputate
              mattis. Duis quis faucibus dolor. Mauris scelerisque justo ut metus
              consectetur pretium. Nulla facilisi.</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce varius iaculis dolor, sit amet fringilla ante suscipit ut.
              Vestibulum a pellentesque sem, sodales interdum sem.
              Donec in justo at leo laoreet semper. Fusce id lorem sit amet mauris vulputate
              mattis. Duis quis faucibus dolor. Mauris scelerisque justo ut metus
              consectetur pretium. Nulla facilisi.</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce varius iaculis dolor, sit amet fringilla ante suscipit ut.
              Vestibulum a pellentesque sem, sodales interdum sem.
              Donec in justo at leo laoreet semper. Fusce id lorem sit amet mauris vulputate
              mattis. Duis quis faucibus dolor. Mauris scelerisque justo ut metus
              consectetur pretium. Nulla facilisi.</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce varius iaculis dolor, sit amet fringilla ante suscipit ut.
              Vestibulum a pellentesque sem, sodales interdum sem.
              Donec in justo at leo laoreet semper. Fusce id lorem sit amet mauris vulputate
              mattis. Duis quis faucibus dolor. Mauris scelerisque justo ut metus
              consectetur pretium. Nulla facilisi.</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce varius iaculis dolor, sit amet fringilla ante suscipit ut.
              Vestibulum a pellentesque sem, sodales interdum sem.
              Donec in justo at leo laoreet semper. Fusce id lorem sit amet mauris vulputate
              mattis. Duis quis faucibus dolor. Mauris scelerisque justo ut metus
              consectetur pretium. Nulla facilisi.</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce varius iaculis dolor, sit amet fringilla ante suscipit ut.
              Vestibulum a pellentesque sem, sodales interdum sem.
              Donec in justo at leo laoreet semper. Fusce id lorem sit amet mauris vulputate
              mattis. Duis quis faucibus dolor. Mauris scelerisque justo ut metus
              consectetur pretium. Nulla facilisi.</Text>
              <LinkContainer>
                <View>
                  <Link to="/dashboard/graphs" component={TouchableOpacity}>
                    <BuiltIcon type="EvilIcons" name="chart" size={50} color={'steelblue'} />
                  </Link>
                  <Text>Charts</Text>
                </View>
                <View>
                  <Link to="/dashboard/notifications" component={TouchableOpacity}>
                    <BuiltIcon type="EvilIcons" name="sc-telegram" size={50} color={'steelblue'} />
                  </Link>
                  <Text>Notifications</Text>
                </View>
              </LinkContainer>
            </Content>
          </ScrollView>
        </AnimatedParent>
        <AnimatedChild
          animation={animation}
          atParent={match.isExact}
          animating={animating}
        >
          <Switch location={location}>
            <Route path="/dashboard/graphs" component={Graph} />
            <Route path="/dashboard/notifications" component={Notifications} />
          </Switch>
        </AnimatedChild>
      </Container>
    );
  }
}

InternalContainer.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  animating: PropTypes.bool.isRequired,
  animation: PropTypes.instanceOf(Animated.constructor).isRequired,
};

const Dashboard = AnimatedContainer(InternalContainer);

export { Dashboard as default };
