'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var showButtons = _ref.showButtons;
  var onSendResponse = _ref.onSendResponse;
  var onHideEditor = _ref.onHideEditor;
  var messages = _ref.messages;
  var hasHideEditorButton = _ref.hasHideEditorButton;
  var contentHtml = _ref.contentHtml;

  var defaultContent = '<p><br/></p>';
  var emptyContent = contentHtml === defaultContent;
  if (!showButtons || emptyContent) return null;
  return _react2.default.createElement(
    'div',
    { className: 'RichEditor-actions' },
    _react2.default.createElement(
      'button',
      {
        className: 'RichEditor-actionsButton btn-Sky',
        onClick: onSendResponse
      },
      messages.buttons.send || 'send'
    ),
    hasHideEditorButton ? _react2.default.createElement(
      'p',
      {
        className: 'RichEditor-actionsButtonCancel',
        onClick: onHideEditor
      },
      messages.buttons.cancel || 'cancel'
    ) : null
  );
};