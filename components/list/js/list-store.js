'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _listActions = require('./list-actions');

var _listActions2 = _interopRequireDefault(_listActions);

var ListStore = Reflux.createStore({
  init: function init() {
    this.listenTo(_listActions2['default'].addItem, this.onAddItem);
  },
  getList: function getList() {
    return JSON.parse(localStorage.getItem('list')) || [];
  },
  saveList: function saveList(arr) {
    return localStorage.setItem('list', JSON.stringify(arr));
  },
  onAddItem: function onAddItem(arr) {
    var list = this.getList();
    console.log(list);
    list.push(arr);
    this.saveList(list);
    this.trigger(list);
  }
});

exports['default'] = ListStore;
module.exports = exports['default'];