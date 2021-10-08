/**
 * Copyright IBM Corp. 2016, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { objectWithoutProperties as _objectWithoutProperties, defineProperty as _defineProperty, extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../node_modules/classnames/index.js';
import { usePrefix } from '../../internal/usePrefix.js';

var _excluded = ["as", "children", "className", "theme"];
var ThemeContext = /*#__PURE__*/React.createContext({
  theme: 'white'
});
/**
 * Specify the theme to be applied to a page, or a region in a page
 */

function Theme(_ref) {
  var _cx;

  var _ref$as = _ref.as,
      BaseComponent = _ref$as === void 0 ? 'div' : _ref$as,
      children = _ref.children,
      customClassName = _ref.className,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, _excluded);

  var prefix = usePrefix();
  var className = classnames(customClassName, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--white"), theme === 'white'), _defineProperty(_cx, "".concat(prefix, "--g10"), theme === 'g10'), _defineProperty(_cx, "".concat(prefix, "--g90"), theme === 'g90'), _defineProperty(_cx, "".concat(prefix, "--g100"), theme === 'g100'), _cx));
  var value = React.useMemo(function () {
    return {
      theme: theme
    };
  }, [theme]);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: value
  }, /*#__PURE__*/React.createElement(BaseComponent, _extends({}, rest, {
    className: className
  }), children));
}
Theme.propTypes = {
  /**
   * Specify a custom component or element to be rendered as the top-level
   * element in the component
   */
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.elementType]),

  /**
   * Provide child elements to be rendered inside of `Theme`
   */
  children: PropTypes.node,

  /**
   * Provide a custom class name to be used on the outermost element rendered by
   * the component
   */
  className: PropTypes.string,

  /**
   * Specify the theme
   */
  theme: PropTypes.oneOf(['white', 'g10', 'g90', 'g100'])
};
/**
 * Get access to the current theme
 */

function useTheme() {
  return React.useContext(ThemeContext);
}

export { Theme, useTheme };
