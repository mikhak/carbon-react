/**
 * Copyright IBM Corp. 2016, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../node_modules/classnames/index.js';
import { usePrefix } from '../../internal/usePrefix.js';

var _excluded = ["as", "className", "children"];
function Layer(_ref) {
  var _ref$as = _ref.as,
      BaseComponent = _ref$as === void 0 ? 'div' : _ref$as,
      customClassName = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, _excluded);

  var prefix = usePrefix();
  var className = classnames("".concat(prefix, "--layer"), customClassName);
  return /*#__PURE__*/React.createElement(BaseComponent, _extends({}, rest, {
    className: className
  }), children);
}
Layer.propTypes = {
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
  className: PropTypes.string
};

export { Layer };
