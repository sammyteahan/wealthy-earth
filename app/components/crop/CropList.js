import React, { Component } from 'react';
import { ScrollView, ListView, View, Text, Animated, TouchableOpacity } from 'react-native';

import { defaultMemoize } from 'reselect';
import styled from 'styled-components/native';
import { Route, Switch, Link } from 'react-router-native';

import CropDetail from './CropDetail';
import AnimatedChild from '../animation/AnimatedChild';
import AnimatedParent from '../animation/AnimatedParent';
import AnimatedContainer from '../animation/AnimatedContainer';
import AnimatedChildHeader from '../animation/AnimatedChildHeader';
import AnimatedParentHeader from '../animation/AnimatedParentHeader';
import { DefaultHeader, Header, Content, ListGroup, ListGroupItem } from '../common';

/**
 * @todo add negative margin to bottom of this to
 * account for tab height
 */
const Container = styled.View`
  flex: 1;
  overflow: hidden;
`;

const AnimationWrapper = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`

class InternalContainer extends Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    /**
     * @todo fix style
     */
    // this.renderRow = crop => (
    //   <ListGroupItem>
    //     <Link to={`/seasons/${this.props.season}/crops/${crop.pk}`} component={TouchableOpacity}>
    //       <Text>{crop.name}</Text>
    //     </Link>
    //   </ListGroupItem>
    // );

    /**
     * @todo fix style
     */
    this.renderRow = crop => (
      <View style={{ paddingHorizontal: 25, paddingVertical: 15 }}>
        <Text>{crop.name}</Text>
      </View>
    );
  }

  renderHeader() {
    <View style={{ margin: 5 }}>
      <Text>CROP LIST</Text>
    </View>
  }

  /**
   *
    <ListGroup
      dataSource={this.props.dataSource}
      renderHeader={this.renderHeader}
      renderRow={this.renderRow}
      enableEmptySections
    />
   */
  render() {
    const { match, location, animating, animation } = this.props;

    return (
      <AnimationWrapper>
        <AnimatedParentHeader animation={animation}>
          <DefaultHeader title={'Wealthy Earth'} />
        </AnimatedParentHeader>
        <AnimatedChildHeader animation={animation} atParent={match.isExact} animating={animating}>
          <Switch location={location}>
            <Route
              path="/seasons/:season/crops/:id"
              render={props => <Header title="Crop Detail" {...props} />}
            />
          </Switch>
        </AnimatedChildHeader>
        <AnimatedParent animation={animation}>
          <ListView
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
            <Route path="/seasons/:season/crops/:id" component={CropDetail} />
          </Switch>
        </AnimatedChild>
      </AnimationWrapper>
    );
  }
}

const CropList = AnimatedContainer(InternalContainer);

export { CropList as default };
