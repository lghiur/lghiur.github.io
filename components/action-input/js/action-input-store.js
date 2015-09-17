'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _actionInputActions = require('./action-input-actions');

var _actionInputActions2 = _interopRequireDefault(_actionInputActions);

var ActionInputStore = Reflux.createStore({
  init: function init() {
    console.log(this, 'Store');
    this.listenTo(_actionInputActions2['default'].inputChanged, this.onInputChanged);
    this.listenTo(_actionInputActions2['default'].inputSubmited, this.onInputSubmited);
  },
  onInputChanged: function onInputChanged(obj) {
    if (typeof callback !== 'function') {
      return;
    }

    obj.callback(obj.value);
  },
  onInputSubmited: function onInputSubmited(obj) {
    if (typeof obj.callback !== 'function') {
      return;
    }
    obj.callback(obj.value);
  }
});

exports['default'] = ActionInputStore;
module.exports = exports['default'];