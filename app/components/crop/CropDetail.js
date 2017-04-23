import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DefaultHeader, Content, Centered } from '../common';

class CropDetail extends Component {
  componentWillMount() {
    console.log('crop detail will mount', this.props.match);
  }

  render() {
    return(
      <View>
        <View>
          <Text>crop detail pk: {this.props.match.params.id}</Text>
        </View>
      </View>
    );
  }
}

export { CropDetail as default };
