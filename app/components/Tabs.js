import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Link } from 'react-router-native';
import styled from 'styled-components/native';

import { Icon } from './common';

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
    <Link to="/" component={TouchableOpacity} activeOpacity={0.2} >
      <Icon type="EvilIcons" name="envelope" size={40} color={'#585858'} />
    </Link>
    <Link to="/dashboard" component={TouchableOpacity}>
      <Icon type="EvilIcons" name="chart" size={40} color={'#585858'} />
    </Link>
  </TabContainer>
);

export { Tabs as default };
