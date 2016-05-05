'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = require('core-decorators');

var _relpers = require('relpers');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Button = (_class = (_temp = _class2 = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'onToggle',


    /**
     * Add of remove action and style if editor is using or not
     * @param  {Event} e Click Event
     */
    value: function onToggle(e) {
      e.preventDefault();
      var _props = this.props;
      var action = _props.action;
      var style = _props.style;
      var receiveStyle = _props.receiveStyle;

      if (receiveStyle) {
        action(style);
      } else {
        action(e);
      }
    }

    /**
     * select css class if button is active or not
     * @param  {Boolean} options.active If button is actived
     * @return {String}  css class
     */

  }, {
    key: 'getCssClass',
    value: function getCssClass(_ref) {
      var active = _ref.active;

      return (0, _classnames2.default)('RichEditor-styleButton', { 'RichEditor-activeButton': active });
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(_ref2) {
      var icon = _ref2.icon;
      var classname = _ref2.classname;
      var label = _ref2.label;

      if (!icon && !classname) return null;
      if (icon) return _react2.default.createElement('span', { className: icon });
      if (classname) return _react2.default.createElement(
        'span',
        { className: classname },
        label
      );
    }

    /**
     * Render button
     * @param  {String} options.label TextLabel for button
     * @return {Component}
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.getCssClass(), onMouseDown: this.onToggle.bind(this) },
        this.renderIcon()
      );
    }
  }]);

  return Button;
}(_react.Component), _class2.propTypes = {
  action: _react.PropTypes.func,
  style: _react.PropTypes.string.isRequired,
  active: _react.PropTypes.bool.isRequired,
  label: _react.PropTypes.string.isRequired,
  receiveStyle: _react.PropTypes.bool.isRequired
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'onToggle', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onToggle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getCssClass', [_coreDecorators.autobind, _relpers.injectProps], Object.getOwnPropertyDescriptor(_class.prototype, 'getCssClass'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'renderIcon', [_coreDecorators.autobind, _relpers.injectProps], Object.getOwnPropertyDescriptor(_class.prototype, 'renderIcon'), _class.prototype)), _class);
exports.default = Button;