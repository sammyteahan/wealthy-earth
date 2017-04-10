import React, { Component, PropTypes } from 'react';
import { Animated, ScrollView } from 'react-native';

import UIVariables from '../../constants/uiVariables';

class AnimatedParent extends Component {
  render() {
    const { animation, children } = this.props;

    return (
      <Animated.View
        style={{
          position: 'absolute',
          padding: 10,
          backgroundColor: '#fff',
          top: UIVariables.Header.Height,
          bottom: 0,
          width: '100%',
          height: '100%',
          left: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '-25%'],
          }),
        }}
      >
        <ScrollView>
          {children}
        </ScrollView>
      </Animated.View>
    );
  }
}

AnimatedParent.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.object.isRequired,
};

export { AnimatedParent as default };
