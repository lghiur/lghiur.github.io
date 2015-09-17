"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BaseComponent = (function (_React$Component) {
  _inherits(BaseComponent, _React$Component);

  function BaseComponent() {
    _classCallCheck(this, BaseComponent);

    _get(Object.getPrototypeOf(BaseComponent.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(BaseComponent, [{
    key: "_bind",
    value: function _bind() {
      var _this = this;

      for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
        methods[_key] = arguments[_key];
      }

      methods.forEach(function (method) {
        return _this[method] = _this[method].bind(_this);
      });
    }
  }]);

  return BaseComponent;
})(React.Component);

exports["default"] = BaseComponent;
module.exports = exports["default"];