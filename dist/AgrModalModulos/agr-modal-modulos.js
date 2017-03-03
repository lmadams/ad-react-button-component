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

require('../AgrModalModulos/agr-modal-modulos.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                _react2.default.createElement(
                    'div',
                    { className: this.state.exibirApp ? 'apps-div' : 'apps-div not-show-apps' },
                    _react2.default.createElement(
                        'div',
                        { className: 'apps-modulos-ul' },
                        this.state.modulos.map(function (modulo) {
                            return _react2.default.createElement(
                                'button',
                                {
                                    className: 'apps-modulo-button',
                                    key: modulo.nome,
                                    onClick: function onClick() {
                                        return AgrModalModulos.onClickModulo(modulo.nome);
                                    }
                                },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'btn-modulo-name' },
                                    modulo.nome
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);
    return AgrModalModulos;
}(_react.Component);

AgrModalModulos.propTypes = {};

exports.default = AgrModalModulos;