import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

class BuiltIcon extends Component {
  get evilIcon() {
    return this.props.type === 'EvilIcons';
  }

  get fontAwesome() {
    return this.props.type === 'FontAwesome';
  }

  renderEvilIcon() {
    const { name, color, size } = this.props;

    return this.evilIcon &&
      <EvilIcon name={name} size={size} color={color} />;
  }

  renderFontAwesomeIcon() {
    const { name, color, size } = this.props;

    return this.fontAwesome &&
      <FontAwesomeIcon name={name} size={size} color={color} />;
  }

  render() {
    return (
      <View>
        {this.renderEvilIcon()}
        {this.renderFontAwesomeIcon()}
      </View>
    );
  }
}

BuiltIcon.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export { BuiltIcon as default };
