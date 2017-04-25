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
const Notifications = () => (
  <Container>
    <Centered>
      <Icon type="EvilIcons" name="sc-telegram" size={72} color={'steelblue'} />
    </Centered>
  </Container>
);

export { Notifications as default };
