import React, { Component } from 'react';
import { ListView } from 'react-native';
import axios from 'axios';

import Home from '../components/home/Home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    // this.state = { ds: ds.cloneWithRows(this.props.crops) };
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { ds: ds.cloneWithRows([]), crops: [] };

    this.onCropPress = id => {
      this.props.history.push(`/crops/${id}`);
    }
  }

  componentWillMount() {
    return axios.get('http://45.55.55.54/rest/crops/').then(response => {
      this.setState({
        crops: response.data,
        ds: this.state.ds.cloneWithRows(response.data),
      });
    });
  }

  // will change to this.props.crops after
  // redux state slice is done
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.crops !== this.state.crops) {
  //     this.setState({ ds: this.state.ds.cloneWithRows(nextProps.crops) });
  //   }
  // }

  render() {
    return (
      <Home
        crops={this.state.crops}
        dataSource={this.state.ds}
        onCropPress={this.onCropPress}
        {...this.props}
      />
    );
  }
}

export { HomeContainer as default };
