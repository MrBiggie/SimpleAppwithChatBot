webpackHotUpdate(5,{

/***/ 1302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(661);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(71);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(39);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(40);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(72);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(73);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(1303);

var _style2 = _interopRequireDefault(_style);

var _chat = __webpack_require__(1304);

var _chat2 = _interopRequireDefault(_chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edric.dang/Desktop/SimpleAppwithChatBot/components/sample-product/index.js';


var MY_TOKEN = "NDHT5JOO2IKK4TAB3MFDEVRIBCA7M3RG";

var _require = __webpack_require__(883),
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/edric.dang/Desktop/SimpleAppwithChatBot/components/sample-product/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/edric.dang/Desktop/SimpleAppwithChatBot/components/sample-product/index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41ZGE3ZTcyZjMyOTcxNWNkZjllNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYW1wbGUtcHJvZHVjdC9pbmRleC5qcz9iMDllOTFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gJy4vc3R5bGUuc2NzcydcbmltcG9ydCBNeUNoYXQgZnJvbSBcIi4vY2hhdFwiO1xuXG5cbmNvbnN0IE1ZX1RPS0VOID0gXCJOREhUNUpPTzJJS0s0VEFCM01GREVWUklCQ0E3TTNSR1wiO1xuY29uc3Qge1dpdCwgbG9nfSA9IHJlcXVpcmUoJ25vZGUtd2l0Jyk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBXaXQoe2FjY2Vzc1Rva2VuOiBNWV9UT0tFTn0pO1xuXG5jb25zdCBWQUxVRSA9IDA7XG4vL2NvbnN0IHtpbnRlcmFjdGl2ZX0gPSByZXF1aXJlKCdub2RlLXdpdCcpO1xuLy9pbnRlcmFjdGl2ZShjbGllbnQpXG4vLyB2YXIgYW5zd2VyID0gXCJXZWxjb21lISBUcnkgdHlwZSBpbiB5b3VyIHF1ZXN0aW9ucyBpbiB0aGUgdGV4dCBib3ggYWJvdmUhXCI7XG52YXIgcmVzcG9uc2UgPSBcIlwiO1xuY2xhc3MgU2FtcGxlUHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgYW5zd2VyOiBcIldlbGNvbWUhIFRyeSB0eXBlIGluIHlvdXIgcXVlc3Rpb25zIGluIHRoZSB0ZXh0IGJveCBhYm92ZSFcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcblxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnN0YXRlLnZhbHVlXG5cbiAgICAgICAgY2xpZW50Lm1lc3NhZ2UocXVlcnksIHt9KVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEuZW50aXRpZXMuSW50ZW50W1ZBTFVFXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YW5zd2VyOiByZXNwb25zZX0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuXG4gICAgaGFuZGxlUmVzcG9uc2UoZXZlbnQpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gY2xpZW50Lm1lc3NhZ2UodGhpcy5zdGF0ZS52YWx1ZSlcbiAgICAgICAgYWxlcnQoJ0EgbmFtZSB3YXMgc3VibWl0dGVkOiAnICsgcmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gKDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtyZXNwb25zZX0+PC9pbnB1dD4pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBjb25zdCB7aW5wdXRWYWx1ZSwgbWVzc2FnZXMsIHRpbWVzdGFtcH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICAvLyBjb25zdCB1c2VySW5mbyA9IHtcbiAgICAgICAgLy8gICAgIGF2YXRhcjogXCJodHRwOi8vaW1nLmJpbmxpdmUuY24vNi5wbmdcIixcbiAgICAgICAgLy8gICAgIHVzZXJJZDogXCI1OWU0NTRlYTUzMTA3ZDY2Y2ViMGE1OThcIixcbiAgICAgICAgLy8gICAgIG5hbWU6ICdjdXN0b21lcidcbiAgICAgICAgLy8gfTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNhbXBsZVByb2R1Y3RcIj5cbiAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN0eWxlc2hlZXR9fS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTYW1wbGVQcm9kdWN0X190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNhbXBsZVByb2R1Y3RfX3RpdGxlLS1oMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlRSWSBPVVI8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxwIGNsYXNzTmFtZT1cIlNhbXBsZVByb2R1Y3RfX3BhcnQxXCI+U0VSVklDRTwvcD48cCBjbGFzc05hbWU9XCJTYW1wbGVQcm9kdWN0X19wYXJ0MlwiPk5PVzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNhbXBsZVByb2R1Y3RfX3RpdGxlLS1kYXNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNhbXBsZVByb2R1Y3RfX3RpdGxlLS1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudGVyIHlvdXIgcXVlcnkgYW5kIHN1Ym1pdC4gWW91IFdpbGwgZ2V0IHRoZSBzdWdnZXN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uXCIgdmFsdWU+VFJZPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFF1ZXJ5OlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIlNhbXBsZVByb2R1Y3RfX3RpdGxlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY3Rpb25cIiB0eXBlPVwic3VibWl0XCI+IFN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJTYW1wbGVQcm9kdWN0X19wYXJ0MVwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbnN3ZXJ9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2FtcGxlUHJvZHVjdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zYW1wbGUtcHJvZHVjdC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUNBO0FBT0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQTdFQTtBQUNBO0FBcUZBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=