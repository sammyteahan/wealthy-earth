import React from 'react';

import styled from 'styled-components/native';

import { NavLink } from './common';

const TabContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

const Tabs = () => (
  <TabContainer>
    <NavLink
      exact
      to="/"
      type="EvilIcons"
      name="envelope"
      size={40}
      color={'#585858'}
      activeColor={'steelblue'}
    />
    <NavLink
      exact
      to="/profile"
      name="user"
      type="EvilIcons"
      size={40}
      color={'#585858'}
      activeColor={'steelblue'}
    />
    <NavLink
      to="/dashboard"
      name="chart"
      type="EvilIcons"
      size={40}
      color={'#585858'}
      activeColor={'steelblue'}
    />
    <NavLink
      to="/season/fall"
      type="FontAwesome"
      name="leaf"
      size={32}
      color={'#585858'}
      activeColor={'steelblue'}
    />
  </TabContainer>
);

export { Tabs as default };
