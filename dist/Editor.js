'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _relpers = require('relpers');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _draftJs = require('draft-js');

var _draftJsPluginsEditor = require('draft-js-plugins-editor');

var _draftJsPluginsEditor2 = _interopRequireDefault(_draftJsPluginsEditor);

var _draftJsLinkifyPlugin = require('draft-js-linkify-plugin');

var _draftJsLinkifyPlugin2 = _interopRequireDefault(_draftJsLinkifyPlugin);

var _coreDecorators = require('core-decorators');

var _draftJsExportHtml = require('draft-js-export-html');

var _draftJsExportMarkdown = require('draft-js-export-markdown');

var _draftJsImportHtml = require('draft-js-import-html');

var _linkDecorator = require('./decorators/linkDecorator');

var _linkDecorator2 = _interopRequireDefault(_linkDecorator);

var _Media = require('./components/Media');

var _Media2 = _interopRequireDefault(_Media);

var _CustomControls = require('./components/CustomControls');

var _CustomControls2 = _interopRequireDefault(_CustomControls);

var _EditorButtonActions = require('./components/EditorButtonActions');

var _EditorButtonActions2 = _interopRequireDefault(_EditorButtonActions);

var _getPlaceholderStyle = require('./utils/getPlaceholderStyle');

var _getPlaceholderStyle2 = _interopRequireDefault(_getPlaceholderStyle);

var _defaultControls = require('./constants/defaultControls');

var _defaultControls2 = _interopRequireDefault(_defaultControls);

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

var linkifyPlugin = (0, _draftJsLinkifyPlugin2.default)();
var plugins = [linkifyPlugin];

var PlatziEditor = (_class = (_temp = _class2 = function (_Component) {
  _inherits(PlatziEditor, _Component);

  function PlatziEditor(props) {
    _classCallCheck(this, PlatziEditor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlatziEditor).call(this, props));

    _this.state = {
      editorState: _this.getInitialEditorState(),
      urlValue: '',
      showUrlInput: false,
      addingMedia: false
    };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }
  /**
   * Change editor state
   * @param  {Object} editorState
   */


  _createClass(PlatziEditor, [{
    key: 'onChange',
    value: function onChange(editorState) {
      this.setState({
        editorState: editorState
      });
      // send html content to the parent component
      if (!this.props.isDetail) {
        this.props.getContentAction(this.props.export === 'markdown' ? this.getMarkdown() : this.getHtml());
      }
    }

    /**
     * Change url state when change input text
     * @param  {Event} e Click event
     */

  }, {
    key: 'onChangeUrl',
    value: function onChangeUrl(e) {
      this.setState({
        urlValue: e.target.value
      });
    }

    /**
     * When user clicked image icon open url input
     * @param  {Event} e Click event
     */

  }, {
    key: 'onAddMedia',
    value: function onAddMedia(e) {
      var _this2 = this;

      e.preventDefault();
      var addingMedia = this.state.addingMedia;

      this.setState({
        showUrlInput: !addingMedia ? true : false,
        addingMedia: !addingMedia
      }, function () {
        setTimeout(function () {
          return _this2.state.addingMedia ? _this2.refs.url.focus() : _this2.refs.editor.focus();
        }, 0);
      });
    }

    /**
     * Add selected text for link
     * @param  {Event} e
     */

  }, {
    key: 'onPromptForLink',
    value: function onPromptForLink(e) {
      var _this3 = this;

      e.preventDefault();
      var editorState = this.state.editorState;

      var selection = editorState.getSelection();
      if (!selection.isCollapsed()) {
        this.setState({
          showUrlInput: true,
          urlValue: ''
        }, function () {
          setTimeout(function () {
            return _this3.refs.url.focus();
          }, 0);
        });
      }
    }

    /**
     * Remove Link of selection
     * @param  {Event} e clik
     */

  }, {
    key: 'onRemoveLink',
    value: function onRemoveLink(e) {
      e.preventDefault();
      var editorState = this.state.editorState;

      var selection = editorState.getSelection();
      if (!selection.isCollapsed()) {
        this.setState({
          editorState: _draftJs.RichUtils.toggleLink(editorState, selection, null)
        });
      }
    }

    /**
     * Create entity when link is confirmed
     * @param  {[type]} e Click or keydown enter
     */

  }, {
    key: 'onConfirmLink',
    value: function onConfirmLink(e) {
      var _this4 = this;

      e.preventDefault();
      var _state = this.state;
      var urlValue = _state.urlValue;
      var editorState = _state.editorState;

      if (urlValue !== '') {
        var entityKey = _draftJs.Entity.create('LINK', 'MUTABLE', { url: urlValue });
        this.setState({
          editorState: _draftJs.RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey),
          urlValue: '',
          showUrlInput: false
        }, function () {
          setTimeout(function () {
            return _this4.refs.editor.focus();
          }, 0);
        });
      }
    }

    /**
     * Create image entity
     * @param  {Event} e Keyup event
     */

  }, {
    key: 'onConfirmAddMedia',
    value: function onConfirmAddMedia(e) {
      var _this5 = this;

      e.preventDefault();
      var _state2 = this.state;
      var urlValue = _state2.urlValue;
      var editorState = _state2.editorState;

      var validateImage = /\.(jpg|jpeg|png)$/.test(urlValue);
      if (!urlValue !== '' && validateImage) {
        var entityKey = _draftJs.Entity.create('IMAGE', 'IMMUTABLE', { src: urlValue });
        this.setState({
          editorState: _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' '),
          urlValue: '',
          showUrlInput: false,
          addingMedia: false
        }, function () {
          setTimeout(function () {
            return _this5.refs.editor.focus();
          }, 0);
        });
      }
    }

    /**
     * Send submit when in input press enter (and hide box)
     * @param  {Envent} e Keydown event
     */

  }, {
    key: 'onLinkInputKeyDown',
    value: function onLinkInputKeyDown(e) {
      if (e.which === 13) {
        if (this.state.addingMedia) {
          this.onConfirmAddMedia(e);
        } else {
          this.onConfirmLink(e);
        }
        // hide box when a link is submited
        this.setState({
          showUrlInput: false
        });
      }
    }

    /**
     * Call prop action for return content to parent
     * @param  {Event} e click
     */

  }, {
    key: 'onSendResponse',
    value: function onSendResponse(e) {
      e.preventDefault();
      var _props = this.props;
      var getContentAction = _props.getContentAction;
      var hideButtonAction = _props.hideButtonAction;
      var showSecondButton = _props.showSecondButton;

      getContentAction(this.props.export === 'markdown' ? this.getMarkdown() : this.getHtml());
      if (showSecondButton) {
        hideButtonAction();
      }
      this.resetEditor();
    }

    /**
     * Call prop function that close editor
     * @param  {Event} e Click event
     */

  }, {
    key: 'onHideEditor',
    value: function onHideEditor(e) {
      e.preventDefault();
      this.props.hideButtonAction();
    }

    /**
     * Add custom css class for block selected
     * @param  {Object}
     * @return {String}  CSS Class
     */

  }, {
    key: 'getBlockStyle',
    value: function getBlockStyle(block) {
      switch (block.getType()) {
        case 'blockquote':
          return 'RichEditor-blockquote';
        default:
          return null;
      }
    }

    /**
     * ger media component
     * @param  {Object} block
     * @return {[type]}   Media block
     */

  }, {
    key: 'getMediaBlockRenderer',
    value: function getMediaBlockRenderer(block) {
      if (block.getType() === 'atomic') {
        return {
          component: _Media2.default,
          editable: false
        };
      }
      return null;
    }

    /**
     * Render url input if showURLInput is true
     * @return {Component}
     */

  }, {
    key: 'renderUrlInput',
    value: function renderUrlInput() {
      var showUrlInput = this.state.showUrlInput;

      if (!showUrlInput) return null;
      return _react2.default.createElement(
        'div',
        { className: 'RichEditor-linkBox' },
        _react2.default.createElement(
          'span',
          null,
          'URL'
        ),
        _react2.default.createElement('input', {
          className: 'RichEditor-linkInput',
          onChange: this.onChangeUrl.bind(this),
          onKeyDown: this.onLinkInputKeyDown.bind(this),
          ref: 'url',
          type: 'text'
        })
      );
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var _this6 = this;

      var _ref$inactive = _ref.inactive;
      var inactive = _ref$inactive === undefined ? false : _ref$inactive;
      var placeholder = _ref.placeholder;
      var showSecondButton = _ref.showSecondButton;
      var showButtons = _ref.showButtons;
      var messages = _ref.messages;
      var controls = _ref.controls;
      var editorState = this.state.editorState;

      if (inactive) {
        setTimeout(function () {
          return _this6.refs.editor.blur();
        }, 0);
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          { className: 'RichEditor-root' },
          _react2.default.createElement(
            'header',
            { className: 'RichEditor-header' },
            _react2.default.createElement(_CustomControls2.default, {
              editorState: editorState,
              controls: controls,
              onAddMedia: this.onAddMedia.bind(this),
              onToggleInline: this.toggleInlineStyle.bind(this),
              onToggleBlock: this.toggleBlockType.bind(this),
              onAddLink: this.onPromptForLink.bind(this),
              onRemoveLink: this.onRemoveLink.bind(this)
            })
          ),
          this.renderUrlInput(),
          _react2.default.createElement(
            'section',
            {
              className: (0, _getPlaceholderStyle2.default)(editorState)
            },
            _react2.default.createElement(_draftJsPluginsEditor2.default, {
              blockStyleFn: this.getBlockStyle,
              blockRendererFn: this.getMediaBlockRenderer,
              editorState: editorState,
              handleKeyCommand: this.handleKeyCommand.bind(this),
              onChange: this.onChange,
              placeholder: placeholder ? placeholder : '',
              ref: 'editor',
              spellCheck: true,
              plugins: plugins
            })
          )
        ),
        showButtons && this.getHtml() !== '<p><br/></p>' ? _react2.default.createElement(_EditorButtonActions2.default, {
          hasHideEditorButton: showSecondButton,
          messages: messages,
          onSendResponse: this.onSendResponse.bind(this),
          onHideEditor: this.onHideEditor.bind(this)
        }) : null
      );
    }

    /**
     * Toggle block action used in editor for inline text
     * @param  {Object} inlineStyle
     */

  }, {
    key: 'toggleInlineStyle',
    value: function toggleInlineStyle(inlineStyle) {
      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    }

    /**
     * Toggle block action used for editor for text block selected
     * @param  {Object} blockType
     */

  }, {
    key: 'toggleBlockType',
    value: function toggleBlockType(blockType) {
      this.onChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
    }
  }, {
    key: 'handleKeyCommand',
    value: function handleKeyCommand(command) {
      var editorState = this.state.editorState;

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }

    /**
     * Convert content state to HTML
     * @return {String} result HTML of editor
     */

  }, {
    key: 'getHtml',
    value: function getHtml() {
      var editorState = this.state.editorState;

      return (0, _draftJsExportHtml.stateToHTML)(editorState.getCurrentContent());
    }

    /**
     * Convert content state to Markdown
     * @return {String} Markdown with the content of the editor
     */

  }, {
    key: 'getMarkdown',
    value: function getMarkdown() {
      var editorState = this.state.editorState;

      return (0, _draftJsExportMarkdown.stateToMarkdown)(editorState.getCurrentContent());
    }

    /**
     * Change editor state to empty
     */

  }, {
    key: 'resetEditor',
    value: function resetEditor() {
      this.setState({
        editorState: _draftJs.EditorState.createEmpty(_linkDecorator2.default)
      });
    }
  }, {
    key: 'getInitialEditorState',
    value: function getInitialEditorState() {
      var defaultHTML = this.props.defaultHTML;

      if (defaultHTML) {
        var content = (0, _draftJsImportHtml.stateFromHTML)(defaultHTML);
        return _draftJs.EditorState.createWithContent(content, _linkDecorator2.default);
      }
      return _draftJs.EditorState.createEmpty(_linkDecorator2.default);
    }
  }]);

  return PlatziEditor;
}(_react.Component), _class2.propTypes = {
  getContentAction: _react.PropTypes.func,
  hideButtonAction: _react.PropTypes.func,
  showButtons: _react.PropTypes.bool,
  showSecondButton: _react.PropTypes.bool,
  placeholder: _react.PropTypes.string,
  isDetail: _react.PropTypes.bool,
  export: _react.PropTypes.oneOf(['markdown', 'html']),
  messages: _react.PropTypes.object,
  controls: _react.PropTypes.array
}, _class2.defaultProps = {
  showButtons: true,
  markdown: false,
  isDetail: false,
  export: 'html',
  messages: {
    buttons: {
      send: 'Send',
      cancel: 'Cancel'
    }
  },
  controls: _defaultControls2.default
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'onChangeUrl', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onChangeUrl'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onAddMedia', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onAddMedia'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onPromptForLink', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onPromptForLink'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onRemoveLink', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onRemoveLink'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onConfirmLink', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onConfirmLink'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onConfirmAddMedia', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onConfirmAddMedia'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onLinkInputKeyDown', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onLinkInputKeyDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onSendResponse', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onSendResponse'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onHideEditor', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'onHideEditor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getBlockStyle', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'getBlockStyle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'renderUrlInput', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'renderUrlInput'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'render', [_relpers.injectProps], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleInlineStyle', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleInlineStyle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleBlockType', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleBlockType'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyCommand', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyCommand'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getHtml', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'getHtml'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getMarkdown', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'getMarkdown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'resetEditor', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'resetEditor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getInitialEditorState', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'getInitialEditorState'), _class.prototype)), _class);
exports.default = PlatziEditor;