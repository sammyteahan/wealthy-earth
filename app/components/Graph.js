import React from 'react';
import styled from 'styled-components/native';

import Icon from './common/Icon';

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
const Graph = () => (
  <Container>
    <Centered>
      <Icon type="EvilIcons" name="chart" size={72} color={'steelblue'} />
    </Centered>
  </Container>
);

export { Graph as default };
