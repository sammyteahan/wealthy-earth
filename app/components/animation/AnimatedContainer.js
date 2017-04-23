import React, { Component, PropTypes } from 'react';
import { Animated } from 'react-native';

export default function (ComposedComponent) {
  class AnimatedContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        animating: false,
        animation: new Animated.Value(this.props.match.isExact ? 0 : 1),
      };
    }

    componentWillReceiveProps(nextProps) {
      const { animation } = this.state;

      const goingToChild = (
        nextProps.match.isExact === false &&
        this.props.match.isExact === true
      );

      const comingFromChild = (
        nextProps.match.isExact === true &&
        this.props.match.isExact === false
      );

      if (goingToChild || comingFromChild) {
        this.setState({ animating: true }, () => {
          Animated.timing(animation, {
            toValue: goingToChild ? 1 : 0,
            duration: 350,
          }).start(() => {
            this.setState({ animating: false });
          });
        });
      }
    }

    render() {
      return <ComposedComponent {...this.state} {...this.props} />;
    }
  }

  AnimatedContainer.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
  };

  return AnimatedContainer;
}
