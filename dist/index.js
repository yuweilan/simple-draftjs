'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Editor = require('./Editor.jsx');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controls = ['bold', 'italic', 'underline', 'separator', 'unordered-list', 'separator', 'image', 'link', 'unlink', 'separator', 'code'];
// import Editor from './Editor.jsx'


(0, _reactDom.render)(_react2.default.createElement(_Editor2.default, {
  getContentAction: printHTML,
  hideButtonAction: closeEditor,
  placeholder: "do somenthing!",
  controls: controls
}), document.getElementById('root'));

function printHTML(content) {
  console.log("func ok");
}

function closeEditor() {
  console.log("close");
}