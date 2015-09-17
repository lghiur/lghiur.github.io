'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Component1 = (function () {
  function Component1(properties) {
    _classCallCheck(this, Component1);

    console.log('constructor 15 Component Laurentiu5');
    this.properties = properties;
    this.numbers = [1, 2, 3, 4, 5, 6];
  }

  _createClass(Component1, [{
    key: 'displayProps',
    value: function displayProps() {
      this.showData();
    }
  }, {
    key: 'showData',
    value: function showData() {
      var _this = this;

      console.log(this.numbers.map(function (number) {
        return number + _this.properties.name;
      }));
      console.log('----', this.properties, '-----');
    }
  }]);

  return Component1;
})();

exports['default'] = Component1;
module.exports = exports['default'];