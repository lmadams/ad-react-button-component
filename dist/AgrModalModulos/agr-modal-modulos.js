'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appsDiv = {
    minHeight: '196px',
    width: '280px',
    background: '#fff',
    position: 'absolute',
    right: '16px',
    top: '72px',
    border: '1px solid rgba(0, 0, 0, .2)',
    color: '#000',
    padding: '20px'
};

var appsModulosUl = {
    height: '100%',
    listStyle: 'none outside none',
    position: 'relative',

    background: '#fff',
    margin: '0',
    minHeight: '100px',
    padding: '5px',
    textAlign: 'left',
    whiteSpace: 'normal'
};

var appsModuloButton = {
    display: 'inline-block',
    verticalAlign: 'top',
    zIndex: '999',
    height: '70px',
    width: '70px',
    margin: '10px',

    borderRadius: '3px',
    border: 'solid 1px rgb(224, 224, 224)',
    backgroundColor: 'white',
    cursor: 'pointer'
};

var AgrModalModulos = function (_Component) {
    (0, _inherits3.default)(AgrModalModulos, _Component);
    (0, _createClass3.default)(AgrModalModulos, null, [{
        key: 'onClickModulo',
        value: function onClickModulo(modulo) {
            localStorage['ls.moduloAtivo'] = modulo;
            setTimeout(window.location = window.location.protocol + '//' + window.location.host + '/' + modulo + '/', 100);
        }
    }]);

    function AgrModalModulos(props) {
        (0, _classCallCheck3.default)(this, AgrModalModulos);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AgrModalModulos.__proto__ || (0, _getPrototypeOf2.default)(AgrModalModulos)).call(this, props));

        _this.state = {
            exibirApp: false,
            modulos: [{
                nome: 'ACC'
            }]
        };
        return _this;
    }

    (0, _createClass3.default)(AgrModalModulos, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var modulosAgrotisHTML = null;
            if (this.state.exibirApp) {
                modulosAgrotisHTML = _react2.default.createElement(
                    'div',
                    { style: appsDiv },
                    _react2.default.createElement(
                        'div',
                        { style: appsModulosUl },
                        this.state.modulos.map(function (modulo) {
                            return _react2.default.createElement(
                                'button',
                                {
                                    style: appsModuloButton,
                                    key: modulo.nome,
                                    onClick: function onClick() {
                                        return AgrModalModulos.onClickModulo(modulo.nome);
                                    }
                                },
                                _react2.default.createElement(
                                    'span',
                                    { style: { textTransform: 'capitalize' } },
                                    modulo.nome
                                )
                            );
                        })
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    {
                        onClick: function onClick() {
                            return _this2.setState({ exibirApp: !_this2.state.exibirApp });
                        }
                    },
                    'Modulos'
                ),
                modulosAgrotisHTML
            );
        }
    }]);
    return AgrModalModulos;
}(_react.Component);

AgrModalModulos.propTypes = {};

exports.default = AgrModalModulos;