'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _mainCover = require('../components/main-cover');

var _mainCover2 = _interopRequireDefault(_mainCover);

var _serviceReference = require('../components/service-reference');

var _serviceReference2 = _interopRequireDefault(_serviceReference);

var _sampleProduct = require('../components/sample-product');

var _sampleProduct2 = _interopRequireDefault(_sampleProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edric.dang/Desktop/SimpleAppwithChatBot/pages/index.js?entry';


var Index = function Index() {
  return _react2.default.createElement(_Layout2.default, { title: 'Hello', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_mainCover2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_serviceReference2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_sampleProduct2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};

exports.default = Index;