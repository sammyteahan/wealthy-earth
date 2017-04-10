import React, { Component, PropTypes } from 'react';
import { Animated } from 'react-native';

import UIVariables from '../../constants/uiVariables';

class AnimatedChildHeader extends Component {
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
          position: 'absolute',
          left: 0,
          bottom: 0,
          top: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [UIVariables.Header.Height, 0],
          }),
        }}
      >
        {previousChildren || children}
      </Animated.View>
    );
  }
}

AnimatedChildHeader.propTypes = {
  atParent: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  animation: PropTypes.object.isRequired,
  animating: PropTypes.bool.isRequired,
};

export { AnimatedChildHeader as default };
