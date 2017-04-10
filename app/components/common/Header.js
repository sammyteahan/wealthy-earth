import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

import UIVariables from '../../constants/uiVariables';
import Icon from './Icon';

const HeaderContainer = styled.View`
  align-items: center;
  background-color: #eaeaea;
  height: ${UIVariables.Header.Height};
  justify-content: flex-end;
  padding-bottom: 5;
  width: 100%;
`;

const Title = styled.Text`
  fontSize: 24;
  color: #585858;
`;

const LinkWrapper = styled.View`
  position: absolute;
  left: 5;
`;

const Header = ({ title, history }) => (
  <HeaderContainer>
    <Title>{title}</Title>
    <LinkWrapper>
      <TouchableOpacity onPress={history.goBack}>
        <Icon type="EvilIcons" name="chevron-left" size={40} color={'#585858'} />
      </TouchableOpacity>
    </LinkWrapper>
  </HeaderContainer>
);

const DefaultHeader = ({ title }) => (
  <HeaderContainer>
    <Title>{title}</Title>
  </HeaderContainer>
);

Header.defaultProps = {
  title: 'Wealthy Earth',
};

Header.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object.isRequired,
};

DefaultHeader.defaultProps = {
  title: 'Wealthy Earth',
};

DefaultHeader.propTypes = {
  title: PropTypes.string,
};

export { Header as default, DefaultHeader };
