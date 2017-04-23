import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import { Centered } from './common';

const Container = styled.View`
  flex: 1;
`;

/**
 * Placeholder component
 */
class TestComponent extends Component {
  render() {
    return (
      <Container style={{
        flex: 1,
        backgroundColor: '#2ecc71',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Centered>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Graph Test Component</Text>
          <TouchableOpacity onPress={this.props.history.goBack}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>BACK</Text>
          </TouchableOpacity>
        </Centered>
      </Container>
    );
  }
}

export { TestComponent as default };
