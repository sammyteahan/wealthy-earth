import React, { Component } from 'react';
import { View, Text } from 'react-native';

import CropList from '../components/crop/CropList';
import { DefaultHeader } from '../components/common';

class CropListContainer extends Component {
  constructor(props) {
    super(props);
    // datasource for list view
  }

  componentWillMount() {}

  renderHeader() {
    return <DefaultHeader />;
  }

  render() {
    const { season } = this.props.match.params;
    return (
      <CropList
        season={season}
        renderHeader={this.renderHeader}
        {...this.props}
      />
    );
  }
}

export { CropListContainer as default };
