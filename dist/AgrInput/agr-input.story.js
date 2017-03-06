'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonMaterialUi = require('storybook-addon-material-ui');

var _colors = require('material-ui/styles/colors');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newTheme = {
    themeName: 'Grey Theme',
    palette: {
        primary1Color: _colors.teal700,
        primary2Color: _colors.teal400,
        primary3Color: _colors.grey100,
        secundary1Color: _colors.grey500,
        secundary2Color: _colors.grey50,
        secundary3Color: _colors.grey300,
        accent1Color: _colors.orange800,
        accent2Color: _colors.grey100,
        accent3Color: _colors.grey500,
        textColor: _colors.darkBlack,
        alternateTextColor: _colors.white,
        canvasColor: _colors.white,
        borderColor: _colors.grey300,
        pickerHeaderColor: _colors.cyan500,
        shadowColor: _colors.fullBlack
    },
    toolbar: {
        height: 64
    }
};

(0, _storybook.storiesOf)('AgrInput', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([newTheme])).add('Input padrao', function () {
    return _react2.default.createElement(_index.AgrInput, null);
});