import React, { Component, PropTypes } from 'react';
import { Animated } from 'react-native';

import UIVariables from '../../constants/uiVariables';

class AnimatedParentHeader extends Component {
  render() {
    const { animation, children } = this.props;

    return (
      <Animated.View
        style={{
          position: 'relative',
          top: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -UIVariables.Header.Height],
          }),
        }}
      >
        {children}
      </Animated.View>
    );
  }
}

AnimatedParentHeader.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.object.isRequired,
};

export { AnimatedParentHeader as default };
