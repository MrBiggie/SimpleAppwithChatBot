'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('next/node_modules/babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

var _chat = require('./chat');

var _chat2 = _interopRequireDefault(_chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edric.dang/Desktop/SimpleAppwithChatBot/components/sample-product/index.js';


var MY_TOKEN = "NDHT5JOO2IKK4TAB3MFDEVRIBCA7M3RG";

var _require = require('node-wit'),
    Wit = _require.Wit,
    log = _require.log;

var client = new Wit({ accessToken: MY_TOKEN });

var VALUE = 0;
//const {interactive} = require('node-wit');
//interactive(client)
// var answer = "Welcome! Try type in your questions in the text box above!";
var response = "";

var SampleProduct = function (_React$Component) {
    (0, _inherits3.default)(SampleProduct, _React$Component);

    function SampleProduct(props) {
        (0, _classCallCheck3.default)(this, SampleProduct);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SampleProduct.__proto__ || (0, _getPrototypeOf2.default)(SampleProduct)).call(this, props));

        _this.state = {
            value: '',
            answer: "Welcome! Try type in your questions in the text box above!"
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(SampleProduct, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var _this2 = this;

            var query = this.state.value;

            client.message(query, {}).then(function (data) {
                response = (0, _stringify2.default)(data.entities.Intent[VALUE].value);
                _this2.setState({ answer: response });
            }).catch(console.error);

            event.preventDefault();
        }
    }, {
        key: 'handleResponse',
        value: function handleResponse(event) {
            var response = client.message(this.state.value);
            alert('A name was submitted: ' + response);
            return _react2.default.createElement('input', { type: 'text', value: response, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // const {inputValue, messages, timestamp} = this.state;
            // const userInfo = {
            //     avatar: "http://img.binlive.cn/6.png",
            //     userId: "59e454ea53107d66ceb0a598",
            //     name: 'customer'
            // };

            return _react2.default.createElement('div', { className: 'SampleProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement('div', { className: 'SampleProduct__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('div', { className: 'SampleProduct__title--h1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'TRY OUR'), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('p', { className: 'SampleProduct__part1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'SERVICE'), _react2.default.createElement('p', { className: 'SampleProduct__part2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'NOW'))), _react2.default.createElement('div', { className: 'SampleProduct__title--dash', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }), _react2.default.createElement('div', { className: 'SampleProduct__title--button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Enter your query and submit. You Will get the suggestion.')))), _react2.default.createElement('form', { onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, 'Query:', _react2.default.createElement('input', { className: 'SampleProduct__title', type: 'text', value: this.state.value, onChange: this.handleChange, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            })), _react2.default.createElement('button', { className: 'action', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, ' Submit')), _react2.default.createElement('label', { className: 'SampleProduct__part1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, this.state.answer));
        }
    }]);

    return SampleProduct;
}(_react2.default.Component);

exports.default = SampleProduct;