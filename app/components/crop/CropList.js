import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

// margin-top: 45;
const Centered = styled.View`
  flex: 1;
  align-items: center;
`;

class CropList extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          {this.props.renderHeader()}
          <Centered>
            <Text>{this.props.season}</Text>
          </Centered>
        </ScrollView>
      </Container>
    );
  }
}

export { CropList as default };
