'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _fruitItem = require('../fruit-item');

var _fruitItem2 = _interopRequireDefault(_fruitItem);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edric.dang/Desktop/SimpleAppwithChatBot/components/service-reference/index.js';


var ServiceReference = function (_React$Component) {
  (0, _inherits3.default)(ServiceReference, _React$Component);

  function ServiceReference() {
    (0, _classCallCheck3.default)(this, ServiceReference);

    return (0, _possibleConstructorReturn3.default)(this, (ServiceReference.__proto__ || (0, _getPrototypeOf2.default)(ServiceReference)).apply(this, arguments));
  }

  (0, _createClass3.default)(ServiceReference, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'ServiceReference', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement('div', { className: 'ServiceReference__items', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('article', { className: 'ServiceReference__item', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('div', { className: 'ServiceReference__item--header', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('figure', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('img', { src: './static/images/trophy-256.ico', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Know Exam Release Date')))), _react2.default.createElement('article', { className: 'ServiceReference__item', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('div', { className: 'ServiceReference__item--header', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('figure', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('img', { src: './static/images/truck-2-xxl.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Know Assignment Due')))), _react2.default.createElement('article', { className: 'ServiceReference__item', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('div', { className: 'ServiceReference__item--header', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('figure', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('img', { src: './static/images/online-support-xxl.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Study Plan Consultation'))))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('div', { className: 'ServiceReference__title--button', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('div', { className: 'action', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'MORE INFO'))));
    }
  }]);

  return ServiceReference;
}(_react2.default.Component);

exports.default = ServiceReference;