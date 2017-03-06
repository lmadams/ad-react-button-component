'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonMaterialUi = require('storybook-addon-material-ui');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newTheme = {
    themeName: 'Grey Theme',
    palette: {
        primary1Color: '#00bcd4',
        alternateTextColor: '#4a4a4a',
        canvasColor: '#616161',
        textColor: '#bdbdbd',
        secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
        disabledColor: '#757575',
        accent1Color: '#607d8b'
    }
};

(0, _storybook.storiesOf)('AgrInput', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([newTheme])).add('Input padrao', function () {
    return _react2.default.createElement(_index.AgrInput, null);
});