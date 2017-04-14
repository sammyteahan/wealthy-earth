import React from 'react';
import styled from 'styled-components/native';

import { Icon, DefaultHeader } from '../common';

const Container = styled.View`
  flex: 1;
`;

const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

/**
 * Placeholder component
 */
const Home = () => (
  <Container>
    <DefaultHeader />
    <Centered>
      <Icon type="FontAwesome" name="search" size={72} color={'steelblue'} />
    </Centered>
  </Container>
);

export { Home as default };
