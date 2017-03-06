'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AgrInput = function AgrInput() {
    return _react2.default.createElement(_TextField2.default, {
        hintText: 'Hint maroto'
    });
};

AgrInput.propTypes = {
    style: _react2.default.PropTypes.object
};

exports.default = AgrInput;