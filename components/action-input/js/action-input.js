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

var _actionInputActions = require('./action-input-actions');

var _actionInputActions2 = _interopRequireDefault(_actionInputActions);

var _actionInputStore = require('./action-input-store');

var _actionInputStore2 = _interopRequireDefault(_actionInputStore);

var ActionInput = (function (_BaseComponent) {
  _inherits(ActionInput, _BaseComponent);

  function ActionInput() {
    _classCallCheck(this, ActionInput);

    _get(Object.getPrototypeOf(ActionInput.prototype), 'constructor', this).call(this);
    this._bind('handleChange', 'handleSubmit');
    this.state = {
      value: ''
    };
  }

  _createClass(ActionInput, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
      _actionInputActions2['default'].inputChanged({
        value: this.state.value,
        callback: this.props.onChangeCallback
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      if (event.keyCode !== 13) {
        return;
      }

      _actionInputActions2['default'].inputSubmited({
        value: this.state.value,
        callback: this.props.onSubmitCallback
      });
      this.setState({ value: '' });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('input', { type: 'text', value: this.state.value,
          onChange: this.handleChange,
          onKeyDown: this.handleSubmit })
      );
    }
  }]);

  return ActionInput;
})(_baseComponentJsBaseComponent2['default']);

exports['default'] = ActionInput;
module.exports = exports['default'];