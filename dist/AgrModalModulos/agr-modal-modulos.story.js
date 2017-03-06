'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('../index');

var _menu = require('material-ui/svg-icons/navigation/menu');

var _menu2 = _interopRequireDefault(_menu);

var _storybookAddonMaterialUi = require('storybook-addon-material-ui');

var _Toolbar = require('material-ui/Toolbar');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _colors = require('material-ui/styles/colors');

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

(0, _storybook.storiesOf)('AgrModalModulos', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([newTheme])).add('Componente padrao', function () {
    return _react2.default.createElement(
        _Toolbar.Toolbar,
        null,
        _react2.default.createElement(
            _Toolbar.ToolbarGroup,
            { firstChild: true },
            _react2.default.createElement(
                _IconButton2.default,
                null,
                _react2.default.createElement(_menu2.default, null)
            ),
            _react2.default.createElement(_Toolbar.ToolbarTitle, { text: 'Agrotis' })
        ),
        _react2.default.createElement(
            _Toolbar.ToolbarGroup,
            null,
            _react2.default.createElement(_index.AgrModalModulos, null),
            _react2.default.createElement(_RaisedButton2.default, { label: 'Sair', secondary: true })
        )
    );
});