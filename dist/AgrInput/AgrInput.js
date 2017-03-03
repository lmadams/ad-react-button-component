'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AgrInput = function AgrInput(_ref) {
    var _ref$style = _ref.style,
        style = _ref$style === undefined ? {} : _ref$style;
    return _react2.default.createElement('input', {
        style: (0, _extends3.default)({}, style)
    });
};

AgrInput.propTypes = {
    style: _react2.default.PropTypes.object
};

exports.default = AgrInput;