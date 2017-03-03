'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('AgrInput', module).add('Input padrao', function () {
    return _react2.default.createElement(_index.AgrInput, null);
});