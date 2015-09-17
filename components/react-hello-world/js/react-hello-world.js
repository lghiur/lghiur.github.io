"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var HelloMessage = (function (_React$Component) {
  _inherits(HelloMessage, _React$Component);

  function HelloMessage() {
    _classCallCheck(this, HelloMessage);

    _get(Object.getPrototypeOf(HelloMessage.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(HelloMessage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name
      );
    }
  }]);

  return HelloMessage;
})(React.Component);

exports["default"] = HelloMessage;
module.exports = exports["default"];