import React, { Component } from 'react';
import axios from 'axios';

import Home from '../components/home/Home';

class HomeContainer extends Component {
  componentWillMount() {
    return axios.get('http://45.55.55.54/rest/crops/').then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <Home />
    );
  }
}

export { HomeContainer as default };
