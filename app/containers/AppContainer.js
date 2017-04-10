import React, { Component, PropTypes } from 'react';
import styled from 'styled-components/native';

import Tabs from '../components/Tabs';

const ApplicationView = styled.View`
  flex: 1;
`;

const Body = styled.View`
  flex: 1;
`;

const Footer = styled.View`
  border-top-width: 2;
  border-color: #eaeaea;
  flex-direction: row;
  flex-shrink: 1;
  padding: 20;
`;

class AppContainer extends Component {
  render() {
    return (
      <ApplicationView>
        <Body>
          {this.props.children}
        </Body>
        <Footer>
          <Tabs />
        </Footer>
      </ApplicationView>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

export { AppContainer as default };
