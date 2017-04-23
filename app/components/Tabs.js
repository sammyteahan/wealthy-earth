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
      to="/seasons/spring"
      type="FontAwesome"
      name="tint"
      size={32}
      color={'#585858'}
      activeColor={'steelblue'}
    />
    <NavLink
      exact
      to="/seasons/summer"
      type="FontAwesome"
      name="sun-o"
      size={32}
      color={'#585858'}
      activeColor={'steelblue'}
    />
    <NavLink
      exact
      to="/dashboard"
      type="FontAwesome"
      name="pie-chart"
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
      to="/seasons/fall"
      type="FontAwesome"
      name="leaf"
      size={32}
      color={'#585858'}
      activeColor={'steelblue'}
    />
    <NavLink
      exact
      to="/seasons/winter"
      type="FontAwesome"
      name="snowflake-o"
      size={32}
      color={'#585858'}
      activeColor={'steelblue'}
    />
  </TabContainer>
);

export { Tabs as default };
