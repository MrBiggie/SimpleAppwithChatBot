'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../components/common/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('../components/common/footer');

var _footer2 = _interopRequireDefault(_footer);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _antd = require('antd');

var _main = require('../static/styles/main.scss');

var _main2 = _interopRequireDefault(_main);

var _nav = require('../components/common/nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edric.dang/Desktop/SimpleAppwithChatBot/components/Layout.js';


var Content = _antd.Layout.Content;

var BaseLayout = function BaseLayout(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('meta', { name: 'theme-color', content: '#0000ff', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, props.title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('meta', { name: 'viewport',
    content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('link', { href: '//fonts.googleapis.com/css?family=Open+Sans:400,600,700', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _main2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })), _react2.default.createElement(Content, { className: 'container-fluid', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('div', { className: 'content-r home-page', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, props.children)));
};

exports.default = BaseLayout;