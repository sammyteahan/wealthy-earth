import React from 'react';
import styled from 'styled-components/native';

import Icon from './common/Icon';
import { DefaultHeader } from './common/Header';

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
const Profile = () => (
  <Container>
    <DefaultHeader />
    <Centered>
      <Icon type="EvilIcons" name="user" size={72} color={'steelblue'} />
    </Centered>
  </Container>
);

export { Profile as default };
