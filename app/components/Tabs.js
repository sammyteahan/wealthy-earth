import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Link } from 'react-router-native';
import styled from 'styled-components/native';

import { NavLink } from './common';

const TabContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

/**
 * @todo swap out icon for component that can understand a match prop
 * and apply additional styles
 */
const Tabs = () => (
  <TabContainer>
    <NavLink
      exact
      to="/spring"
      type="FontAwesome"
      name="tint"
      size={32}
      color={'#585858'}
      activeColor={'steelblue'}
    />
    <NavLink
      exact
      to="/summer"
      type="FontAwesome"
      name="sun-o"
      size={32}
      color={'#585858'}
      activeColor={'steelblue'}
    />
    <NavLink
      exact
      to="/"
      type="FontAwesome"
      name="search"
      size={32}
      color={'#585858'}
      activeColor={'steelblue'}
    />
    <NavLink
      exact
      to="/fall"
      type="FontAwesome"
      name="leaf"
      size={32}
      color={'#585858'}
      activeColor={'steelblue'}
    />
    <NavLink
      exact
      to="/winter"
      type="FontAwesome"
      name="snowflake-o"
      size={32}
      color={'#585858'}
      activeColor={'steelblue'}
    />
  </TabContainer>
);

export { Tabs as default };
