import React, { Component, PropTypes } from 'react';
import { Animated } from 'react-native';

import UIVariables from '../../constants/uiVariables';

class AnimatedChild extends Component {
  constructor(props) {
    super(props);
    this.state = { previousChildren: null };
  }

  componentWillReceiveProps(nextProps) {
    const navigatingToParent = nextProps.atParent && !this.props.atParent;
    const animationEnded = this.props.animating && !nextProps.animating;

    if (navigatingToParent) {
      this.setState({ previousChildren: this.props.children });
    } else if (animationEnded) {
      this.setState({ previousChildren: null });
    }
  }

  get animatedStyle() {
    const { animation, direction } = this.props;

    if (direction === 'left' || direction === 'right') {
      return {
        backgroundColor: '#fff',
        position: 'absolute',
        top: UIVariables.Header.Height,
        bottom: 0,
        width: '100%',
        [direction]: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['100%', '0%'],
        }),
      };
    }

    return {
      backgroundColor: '#fff',
      position: 'absolute',
      top: UIVariables.Header.Height,
      bottom: 0,
      width: '100%',
      [direction]: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['100%', '10%'],
      }),
    };
  }

  render() {
    const { children } = this.props;
    const { previousChildren } = this.state;

    return (
      <Animated.View
        style={this.animatedStyle}
      >
        {previousChildren || children}
      </Animated.View>
    );
  }
}

AnimatedChild.defaultProps = {
  direction: 'left',
};

AnimatedChild.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.object.isRequired,
  atParent: PropTypes.bool.isRequired,
  animating: PropTypes.bool.isRequired,
  direction: PropTypes.string,
};

export { AnimatedChild as default };
