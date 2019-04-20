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

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edric.dang/Desktop/SimpleAppwithChatBot/components/fruit-item/index.js';


var Fruit = function (_React$Component) {
  (0, _inherits3.default)(Fruit, _React$Component);

  function Fruit(props) {
    (0, _classCallCheck3.default)(this, Fruit);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Fruit.__proto__ || (0, _getPrototypeOf2.default)(Fruit)).call(this, props));

    _this.state = { isToggleOn: true
      // This binding is necessary to make `this` work in the callback
    };_this.handleStateClick = _this.handleStateClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Fruit, [{
    key: 'handleStateClick',
    value: function handleStateClick() {
      // this.setState((prevState, props) => ({
      //   counter: prevState.counter + props.increment
      // }));

      this.setState(function (prevState) {
        return {
          isToggleOn: !prevState.isToggleOn
        };
      });
    }
  }, {
    key: 'getFruit',
    value: function getFruit() {
      var path = '/fruit/' + this.props.id;
      return path;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('article', { className: 'fruit-item', key: this.props.id, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, this.props.name), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, this.props.color), _react2.default.createElement('img', { src: this.props.image, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement('div', { className: 'button', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_link2.default, { href: this.getFruit(), __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'info'))), _react2.default.createElement('div', { onClick: this.handleStateClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, this.state.isToggleOn ? 'ON' : 'OFF')));
    }
  }]);

  return Fruit;
}(_react2.default.Component);

exports.default = Fruit;