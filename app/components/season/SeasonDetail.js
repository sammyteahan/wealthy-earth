import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styled from 'styled-components/native';
import { Switch, Route, Link } from 'react-router-native';

import { DefaultHeader, Header } from '../common';
import { AnimatedChild, AnimatedParent, AnimatedContainer, AnimatedChildHeader, AnimatedParentHeader } from '../animation';

const Container = styled.View`
  flex: 1;
  overflow: hidden;
  padding-bottom: 60;
`;

class SeasonDetail extends Component {
  render() {
    return (
      <Container>
        <DefaultHeader />
        <Text>Season Detail</Text>
      </Container>
    );
  }
}

export { SeasonDetail as default };
