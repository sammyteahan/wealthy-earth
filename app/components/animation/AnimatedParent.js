import React, { Component, PropTypes } from 'react';
import { Animated } from 'react-native';

import UIVariables from '../../constants/uiVariables';

class AnimatedParent extends Component {
  get animatedStyle() {
    const { animation, direction } = this.props;

    if (direction === 'left' || direction === 'right') {
      return {
        position: 'absolute',
        backgroundColor: '#fff',
        top: UIVariables.Header.Height,
        bottom: 0,
        width: '100%',
        height: '100%',
        [direction]: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '-25%'],
        }),
      };
    }

    return {
      position: 'absolute',
      backgroundColor: '#fff',
      top: UIVariables.Header.Height,
      bottom: 0,
      width: '100%',
      height: '100%',
    };
  }

  render() {
    const { children } = this.props;

    return (
      <Animated.View
        style={this.animatedStyle}
      >
        {children}
      </Animated.View>
    );
  }
}

AnimatedParent.defaultProps = {
  direction: 'left',
};

AnimatedParent.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.object.isRequired,
  direction: PropTypes.string,
};

export { AnimatedParent as default };
