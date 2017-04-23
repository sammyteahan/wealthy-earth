import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';

import axios from 'axios';

import CropList from '../components/crop/CropList';
import { DefaultHeader } from '../components/common';

class CropListContainer extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { ds: ds.cloneWithRows([]), crops: [] };
  }

  componentWillMount() {
    const { season } = this.props.match.params;

    return axios.get(`http://45.55.55.54/rest/seasons/${season}`).then(response => {
      this.setState({
        crops: response.data,
        ds: this.state.ds.cloneWithRows(response.data),
      });
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.state.crops !== nextProps.crops) {
  //     this.state = { ds: this.state.ds.cloneWithRows(nextProps.crops) };
  //   }
  // }

  renderHeader() {
    return <DefaultHeader />;
  }

  render() {
    const { season } = this.props.match.params;
    return (
      <CropList
        season={season}
        dataSource={this.state.ds}
        renderHeader={this.renderHeader}
        {...this.props}
      />
    );
  }
}

export { CropListContainer as default };
