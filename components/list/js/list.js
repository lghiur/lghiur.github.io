'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _baseComponentJsBaseComponent = require('../../base-component/js/base-component');

var _baseComponentJsBaseComponent2 = _interopRequireDefault(_baseComponentJsBaseComponent);

var _actionInputJsActionInput = require('../../action-input/js/action-input');

var _actionInputJsActionInput2 = _interopRequireDefault(_actionInputJsActionInput);

var _listActions = require('./list-actions');

var _listActions2 = _interopRequireDefault(_listActions);

var _listStore = require('./list-store');

var _listStore2 = _interopRequireDefault(_listStore);

var _componentsListItemJsListItem = require('../components/list-item/js/list-item');

var _componentsListItemJsListItem2 = _interopRequireDefault(_componentsListItemJsListItem);

var List = (function (_BaseComponent) {
  _inherits(List, _BaseComponent);

  function List(props) {
    _classCallCheck(this, List);

    _get(Object.getPrototypeOf(List.prototype), 'constructor', this).call(this, props);

    this.state = {
      listItems: _listStore2['default'].getList()
    };

    this._bind('addItem', 'onChange');
  }

  _createClass(List, [{
    key: 'addItem',
    value: function addItem(value) {
      _listActions2['default'].addItem({
        id: this.state.listItems.length + 1,
        content: value
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(list) {
      this.setState({
        listItems: list
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = _listStore2['default'].listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var listItems = this.state.listItems;
      return React.createElement(
        'div',
        null,
        React.createElement(_actionInputJsActionInput2['default'], { onSubmitCallback: this.addItem }),
        React.createElement('ul', null),
        listItems.map(function (item) {
          return React.createElement(_componentsListItemJsListItem2['default'], { key: item.id, content: item.content });
        })
      );
    }
  }]);

  return List;
})(_baseComponentJsBaseComponent2['default']);

exports['default'] = List;
module.exports = exports['default'];