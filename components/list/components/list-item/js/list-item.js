"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ListItem = (function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    _get(Object.getPrototypeOf(ListItem.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        this.props.content
      );
    }
  }]);

  return ListItem;
})(React.Component);

exports["default"] = ListItem;
module.exports = exports["default"];