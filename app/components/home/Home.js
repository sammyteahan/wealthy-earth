import React, { Component } from 'react';
import { ScrollView, ListView, View, Text, Animated, TouchableOpacity } from 'react-native';

import { defaultMemoize } from 'reselect';
import styled from 'styled-components/native';
import { Route, Switch, Link } from 'react-router-native';

import CropDetail from '../crop/CropDetail';
import AnimatedChild from '../animation/AnimatedChild';
import AnimatedParent from '../animation/AnimatedParent';
import AnimatedChildHeader from '../animation/AnimatedChildHeader';
import AnimatedParentHeader from '../animation/AnimatedParentHeader';
import { DefaultHeader, Header, Content, ListGroup, ListGroupItem } from '../common';

const AnimationWrapper = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

const Container = styled.View`
  flex: 1;
`;

const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      animation: new Animated.Value(this.props.match.isExact ? 0 : 1),
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.prepareOnCropPress = defaultMemoize(pk => () => this.props.onCropPress(pk));

    this.renderRow = crop => (
      <ListGroupItem>
        <Link to={`/${crop.pk}`} component={TouchableOpacity}>
          <Text>{crop.name}</Text>
        </Link>
      </ListGroupItem>
    );

    // this.renderRow = crop => (
    //   <ListGroupItem onPress={this.prepareOnCropPress(crop.pk)}>
    //     <View>
    //       <Text>{crop.name}</Text>
    //     </View>
    //   </ListGroupItem>
    // );
  }

  componentWillReceiveProps(nextProps) {
    const { animation } = this.state;

    const goingToChild = (
      nextProps.match.isExact === false &&
      this.props.match.isExact === true
    );

    const comingFromChild = (
      nextProps.match.isExact === true &&
      this.props.match.isExact === false
    );

    if (goingToChild || comingFromChild) {
      console.log('goingtochild or comingfromchild');
      this.setState({ animating: true }, () => {
        Animated.timing(animation, {
          toValue: goingToChild ? 1 : 0,
          duration: 350,
        }).start(() => {
          this.setState({ animating: false });
        });
      });
    }
  }

  renderHeader() {
    return (
      <View>
        <Text>SEARCH CROPS</Text>
      </View>
    );
  }

  render() {
    const { match, location } = this.props;
    const { animation, animating } = this.state;

    return (
      <AnimationWrapper>
        <AnimatedParentHeader animation={animation}>
          <DefaultHeader url={match.url} title="Wealthy Earth" />
        </AnimatedParentHeader>
        <AnimatedChildHeader
          animation={animation}
          atParent={match.isExact}
          animating={animating}
        >
          <Switch location={location}>
            <Route path="/:id" render={props => <Header title="crop" {...props} />} />
          </Switch>
        </AnimatedChildHeader>
        <AnimatedParent animation={animation}>
          <ListGroup
            dataSource={this.props.dataSource}
            renderHeader={this.renderHeader}
            renderRow={this.renderRow}
            enableEmptySections
          />
        </AnimatedParent>
        <AnimatedChild
          animation={animation}
          animating={animating}
          atParent={match.isExact}
        >
          <Switch location={location}>
            <Route path="/:id" component={CropDetail} />
          </Switch>
        </AnimatedChild>
      </AnimationWrapper>
    );
  }
}

export { Home as default };
