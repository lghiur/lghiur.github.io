'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Component2 = (function () {
  function Component2(properties) {
    _classCallCheck(this, Component2);

    console.log('constructorB');
    this.properties = properties;
  }

  _createClass(Component2, [{
    key: 'displayProps',
    value: function displayProps() {
      console.log(this.properties);
      return this.properties;
    }
  }]);

  return Component2;
})();

exports['default'] = Component2;
module.exports = exports['default'];