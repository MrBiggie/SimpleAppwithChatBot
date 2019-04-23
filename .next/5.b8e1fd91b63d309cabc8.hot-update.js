webpackHotUpdate(5,{

/***/ 1301:
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

var _style = __webpack_require__(1302);

var _style2 = _interopRequireDefault(_style);

var _chat = __webpack_require__(1303);

var _chat2 = _interopRequireDefault(_chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edric.dang/Desktop/SimpleAppwithChatBot/components/sample-product/index.js';


var MY_TOKEN = "4ECVKBPXXPYHIY7UAZZCRP64YE7RVQYJ";

var _require = __webpack_require__(1304),
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

                var flag = data.entities;
                alert((0, _stringify2.default)(flag));
                if ((0, _stringify2.default)(flag) == "{}") {
                    _this2.setState({ answer: "Sorry, we don't have an answer to that question" });
                } else {
                    response = (0, _stringify2.default)(flag.intent[VALUE].value);
                    if (response == "") {
                        _this2.setState({ answer: "Sorry, we don't have an answer to that question" });
                    } else {
                        _this2.setState({ answer: response });
                    }
                }
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
                    lineNumber: 63
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
                    lineNumber: 75
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }), _react2.default.createElement('div', { className: 'SampleProduct__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('div', { className: 'SampleProduct__title--h1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'TRY OUR'), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('p', { className: 'SampleProduct__part1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'SERVICE'), _react2.default.createElement('p', { className: 'SampleProduct__part2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'NOW'))), _react2.default.createElement('div', { className: 'SampleProduct__title--dash', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }), _react2.default.createElement('div', { className: 'SampleProduct__title--button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, 'Enter your query and submit. You Will get the suggestion.')))), _react2.default.createElement('form', { onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, 'Query:', _react2.default.createElement('input', { className: 'SampleProduct__title', type: 'text', value: this.state.value, onChange: this.handleChange, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            })), _react2.default.createElement('button', { className: 'action', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, ' Submit')), _react2.default.createElement('label', { className: 'SampleProduct__part1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iOGUxZmQ5MWI2M2QzMDljYWJjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYW1wbGUtcHJvZHVjdC9pbmRleC5qcz84ZWVmYjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gJy4vc3R5bGUuc2NzcydcbmltcG9ydCBNeUNoYXQgZnJvbSBcIi4vY2hhdFwiO1xuXG5cbmNvbnN0IE1ZX1RPS0VOID0gXCI0RUNWS0JQWFhQWUhJWTdVQVpaQ1JQNjRZRTdSVlFZSlwiO1xuY29uc3Qge1dpdCwgbG9nfSA9IHJlcXVpcmUoJ25vZGUtd2l0Jyk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBXaXQoe2FjY2Vzc1Rva2VuOiBNWV9UT0tFTn0pO1xuXG5jb25zdCBWQUxVRSA9IDA7XG4vL2NvbnN0IHtpbnRlcmFjdGl2ZX0gPSByZXF1aXJlKCdub2RlLXdpdCcpO1xuLy9pbnRlcmFjdGl2ZShjbGllbnQpXG4vLyB2YXIgYW5zd2VyID0gXCJXZWxjb21lISBUcnkgdHlwZSBpbiB5b3VyIHF1ZXN0aW9ucyBpbiB0aGUgdGV4dCBib3ggYWJvdmUhXCI7XG52YXIgcmVzcG9uc2UgPSBcIlwiO1xuY2xhc3MgU2FtcGxlUHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgYW5zd2VyOiBcIldlbGNvbWUhIFRyeSB0eXBlIGluIHlvdXIgcXVlc3Rpb25zIGluIHRoZSB0ZXh0IGJveCBhYm92ZSFcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcblxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnN0YXRlLnZhbHVlXG5cblxuICAgICAgICBjbGllbnQubWVzc2FnZShxdWVyeSwge30pXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdmFyIGZsYWcgPSBkYXRhLmVudGl0aWVzO1xuICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGZsYWcpKTtcbiAgICAgICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShmbGFnKSA9PSBcInt9XCIpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthbnN3ZXI6IFwiU29ycnksIHdlIGRvbid0IGhhdmUgYW4gYW5zd2VyIHRvIHRoYXQgcXVlc3Rpb25cIn0pO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeShmbGFnLmludGVudFtWQUxVRV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YW5zd2VyOiBcIlNvcnJ5LCB3ZSBkb24ndCBoYXZlIGFuIGFuc3dlciB0byB0aGF0IHF1ZXN0aW9uXCJ9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Fuc3dlcjogcmVzcG9uc2V9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cblxuICAgIGhhbmRsZVJlc3BvbnNlKGV2ZW50KSB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IGNsaWVudC5tZXNzYWdlKHRoaXMuc3RhdGUudmFsdWUpXG4gICAgICAgIGFsZXJ0KCdBIG5hbWUgd2FzIHN1Ym1pdHRlZDogJyArIHJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuICg8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cmVzcG9uc2V9PjwvaW5wdXQ+KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gY29uc3Qge2lucHV0VmFsdWUsIG1lc3NhZ2VzLCB0aW1lc3RhbXB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgLy8gY29uc3QgdXNlckluZm8gPSB7XG4gICAgICAgIC8vICAgICBhdmF0YXI6IFwiaHR0cDovL2ltZy5iaW5saXZlLmNuLzYucG5nXCIsXG4gICAgICAgIC8vICAgICB1c2VySWQ6IFwiNTllNDU0ZWE1MzEwN2Q2NmNlYjBhNTk4XCIsXG4gICAgICAgIC8vICAgICBuYW1lOiAnY3VzdG9tZXInXG4gICAgICAgIC8vIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTYW1wbGVQcm9kdWN0XCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzdHlsZXNoZWV0fX0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2FtcGxlUHJvZHVjdF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTYW1wbGVQcm9kdWN0X190aXRsZS0taDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5UUlkgT1VSPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48cCBjbGFzc05hbWU9XCJTYW1wbGVQcm9kdWN0X19wYXJ0MVwiPlNFUlZJQ0U8L3A+PHAgY2xhc3NOYW1lPVwiU2FtcGxlUHJvZHVjdF9fcGFydDJcIj5OT1c8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTYW1wbGVQcm9kdWN0X190aXRsZS0tZGFzaFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTYW1wbGVQcm9kdWN0X190aXRsZS0tYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRlciB5b3VyIHF1ZXJ5IGFuZCBzdWJtaXQuIFlvdSBXaWxsIGdldCB0aGUgc3VnZ2VzdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvblwiIHZhbHVlPlRSWTwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBRdWVyeTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJTYW1wbGVQcm9kdWN0X190aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uXCIgdHlwZT1cInN1Ym1pdFwiPiBTdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiU2FtcGxlUHJvZHVjdF9fcGFydDFcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYW5zd2VyfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNhbXBsZVByb2R1Y3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2FtcGxlLXByb2R1Y3QvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQWZBO0FBQ0E7QUFrQkE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQXpGQTtBQUNBO0FBaUdBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=