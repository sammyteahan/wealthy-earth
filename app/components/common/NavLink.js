import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';

import { Route, Link } from 'react-router-native';
import BuiltIcon from './Icon';

/**
 * NavLink
 *
 * An opinionated <Link> wrapper that knows when it is 'active'
 */
const NavLink = ({
  to,
  exact,
  activeStyle,
  isActive: getIsActive,
  type,
  name,
  size,
  color,
  activeColor,
  ...rest
}) => (
  <Route
    path={to}
    exact={exact}
    children={({ location, match }) => { // eslint-disable-line react/no-children-prop
      const isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return (
        <Link
          to={to}
          component={TouchableOpacity}
          style={isActive ? { ...activeStyle } : null}
        >
          <BuiltIcon
            name={name}
            type={type}
            size={size}
            color={isActive ? activeColor : color}
            {...rest}
          />
        </Link>
      );
    }}
  />
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  isActive: PropTypes.func,
  activeStyle: PropTypes.object,
  type: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  children: PropTypes.oneOfType([ // eslint-disable-line react/no-unused-prop-types
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export { NavLink as default };
