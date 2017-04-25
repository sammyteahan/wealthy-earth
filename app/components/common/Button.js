import React, { Children, PropTypes } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styled from 'styled-components/native';

import Text from './Text';

const ButtonTextBase = styled(Text)`
  text-align: center;
  font-weight: bold;
  font-size: 16;
  line-height: 18;
`;

const LightBgText = styled(ButtonTextBase)`color: #333;`;
const DarkBgText = styled(ButtonTextBase)`color: #fff;`;
const LinkText = styled(ButtonTextBase)`color: #1999DB;`;

/* eslint-disable react/prop-types */

/**
 * Wraps a component, allowing the caller to supply the property `text` instead of children if
 * desired.
 *
 * @private
 * @param {function|class} ComponentFun :: component to be wrapped.
 * @param {function|class} [TextComponentFun] :: text component to wrap text.
 * @return {function} component function.
 */
const augmentsText = (ComponentFun, TextComponentFun = Text) => {
  const WrappedComponent = (props) => {
    // If this view has children, or no `text` property, invoke `ComponentFun` immediately.
    if (Children.count(props.children) > 0 || !props.text) {
      return <ComponentFun {...props} />;
    }

    const { text, textStyle } = props;
    return (
      <ComponentFun {...props}>
        <TextComponentFun style={textStyle}>{text}</TextComponentFun>
      </ComponentFun>
    );
  };

  WrappedComponent.displayName = 'AugmentedButton';

  return WrappedComponent;
};

augmentsText.displayName = 'WrappedText';

/* eslint-enable react/prop-types */

const BaseButton = ({ children, ...restOfProps }) => (
  <TouchableOpacity {...restOfProps}>
    <View>
      {children}
    </View>
  </TouchableOpacity>
);

const BaseStyledButton = styled(BaseButton)`
  align-self: center;
  border-color: #ccc;
  border-radius: 2;
  border-width: 0.5;
  padding-vertical: 16;
  padding-horizontal: 24;
  margin-bottom: 5;
`;

const Button = augmentsText(styled(BaseStyledButton)`
  background-color: #fff;
`, LightBgText);

const PrimaryButton = augmentsText(styled(BaseStyledButton)`
  background-color: #1999DB;
`, DarkBgText);

const Link = augmentsText(styled(BaseStyledButton)`
  border-width: 0;
  background-color: transparent;
`, LinkText);

BaseButton.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export { Button as default, Link, PrimaryButton };
