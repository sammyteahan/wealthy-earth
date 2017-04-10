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

  render() {
    const { animation, children } = this.props;
    const { previousChildren } = this.state;

    return (
      <Animated.View
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          top: UIVariables.Header.Height,
          bottom: 0,
          width: '100%',
          left: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['100%', '0%'],
          }),
        }}
      >
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
            left: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          }}
        >
          {previousChildren || children}
        </Animated.View>
      </Animated.View>
    );
  }
}

AnimatedChild.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.object.isRequired,
  atParent: PropTypes.bool.isRequired,
  animating: PropTypes.bool.isRequired,
};

export { AnimatedChild as default };
