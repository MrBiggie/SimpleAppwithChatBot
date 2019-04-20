'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edric.dang/Desktop/SimpleAppwithChatBot/components/common/nav/index.js';
// import Search from '../Search'


var Header = function Header() {
  return _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_link2.default, { href: '/', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'HOME')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_link2.default, { href: '/', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'PRODUCT')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_link2.default, { href: '/', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'ABOUT')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_link2.default, { href: '/', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'CONTACT')), _react2.default.createElement('li', { className: 'action', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_link2.default, { href: '/', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'TRY'))));
};

exports.default = Header;