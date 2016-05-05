'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _class2, _temp;
// import DEFAULT_CONTROLS from '../constants/defaultControls';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = require('core-decorators');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _getButtons = require('../utils/getButtons');

var _getButtons2 = _interopRequireDefault(_getButtons);

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

var InlineControls = (_class = (_temp = _class2 = function (_Component) {
  _inherits(InlineControls, _Component);

  function InlineControls() {
    _classCallCheck(this, InlineControls);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InlineControls).apply(this, arguments));
  }

  _createClass(InlineControls, [{
    key: 'renderSeparator',


    /**
     * Render separator for buttons block
     * @param  {number} index Index for key
     * @return {Component}
     */
    value: function renderSeparator(index) {
      return _react2.default.createElement('div', {
        key: index,
        className: 'RichEditor-separator'
      });
    }

    /**
     * render button with action
     * @param  {Function}  action    Action for button
     * @param  {Object}  control
     * @param  {Boolean} receiveStyle
     * @return {Component}
     */

  }, {
    key: 'renderButton',
    value: function renderButton(action, control) {
      var receiveStyle = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
      var editorState = this.props.editorState;

      var currentStyle = editorState.getCurrentInlineStyle();
      var selection = editorState.getSelection();
      var block = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
      return _react2.default.createElement(_Button2.default, {
        key: control.label,
        active: currentStyle.has(control.style) || block.getType() === control.style,
        label: control.label,
        icon: control.icon,
        classname: control.classname,
        action: action,
        style: control.style,
        receiveStyle: receiveStyle
      });
    }

    /**
     * Inline Controls for editor
     * @param  {Object} options.editorState
     * @param  {Function} options.onToggle
     * @return {Component}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var controls = (0, _getButtons2.default)(this.props.controls);
      if (controls.lenght === 0) return null;
      return _react2.default.createElement(
        'div',
        { className: 'RichEditor-controls' },
        controls.map(function (control, index) {
          return _this2.selectType(control, index);
        })
      );
    }

    /**
     * Define buttons settings
     * @param  {Object} control
     * @param  {Number} index   Used for key
     * @return {Component}      render Button
     */

  }, {
    key: 'selectType',
    value: function selectType(control, index) {
      var _props = this.props;
      var onAddMedia = _props.onAddMedia;
      var onAddLink = _props.onAddLink;
      var onRemoveLink = _props.onRemoveLink;
      var onToggleBlock = _props.onToggleBlock;
      var onToggleInline = _props.onToggleInline;
      var type = control.type;

      switch (type) {
        case 'separator':
          return this.renderSeparator(index);
        case 'block':
          return this.renderButton(onToggleBlock, control, true);
        case 'inline':
          return this.renderButton(onToggleInline, control, true);
        case 'image':
          return this.renderButton(onAddMedia, control);
        case 'link':
          return this.renderButton(onAddLink, control);
        case 'unlink':
          return this.renderButton(onRemoveLink, control);
        default:
          return this.renderSeparator();
      }
    }
  }]);

  return InlineControls;
}(_react.Component), _class2.propTypes = {
  editorState: _react.PropTypes.object.isRequired
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'renderSeparator', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'renderSeparator'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'renderButton', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'renderButton'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'selectType', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'selectType'), _class.prototype)), _class);
exports.default = InlineControls;