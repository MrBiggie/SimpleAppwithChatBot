"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("next/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chatReact = require("chat-react");

var _chatReact2 = _interopRequireDefault(_chatReact);

var _ReactBaseClasses = require("react/lib/ReactBaseClasses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/edric.dang/Desktop/SimpleAppwithChatBot/components/sample-product/chat.js";


var VALUE = 0;
var MY_TOKEN = "NDHT5JOO2IKK4TAB3MFDEVRIBCA7M3RG";

var _require = require("node-wit"),
    Wit = _require.Wit,
    log = _require.log;

var client = new Wit({ accessToken: MY_TOKEN });

var MyChat = function (_Component) {
    (0, _inherits3.default)(MyChat, _Component);

    function MyChat() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MyChat);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyChat.__proto__ || (0, _getPrototypeOf2.default)(MyChat)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            inputValue: '',
            messages: [],
            timestamp: new Date().getTime()
        }, _this.setInputfoucs = function () {
            _this.chat.refs.input.inputFocus(); //set input foucus
        }, _this.setScrollTop = function () {
            _this.chat.refs.message.setScrollTop(1200); //set scrollTop position
        }, _this.sendMessage = function (v) {
            var value = v.value;

            if (!value) return;
            var _this$state$messages = _this.state.messages,
                messages = _this$state$messages === undefined ? [] : _this$state$messages;

            messages.push(v);

            messages.push(client.message(v));
            // var response;
            // client.message(inputValue, {})
            //     .then((data) => {
            //         response = JSON.stringify(data.entities.Intent[VALUE].value);
            //         messages.push(response);
            //     })
            //     .catch(console.error);

            _this.setState({ messages: messages, timestamp: new Date().getTime(), inputValue: '' });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MyChat, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                inputValue = _state.inputValue,
                messages = _state.messages,
                timestamp = _state.timestamp;

            var userInfo = {
                avatar: "http://img.binlive.cn/6.png",
                userId: "59e454ea53107d66ceb0a598",
                name: 'ricky'
            };
            return _react2.default.createElement(_chatReact2.default, {
                ref: function ref(el) {
                    return _this2.chat = el;
                },
                className: "my-chat-box",
                dataSource: messages,
                userInfo: userInfo,
                value: inputValue,
                sendMessage: this.sendMessage,
                timestamp: timestamp,
                placeholder: "input here",
                messageListStyle: { width: '100%', height: window.outerHeight },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            });
        }
    }]);

    return MyChat;
}(_ReactBaseClasses.Component);

exports.default = MyChat;