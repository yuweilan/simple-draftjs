'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Editor = require('./Editor.jsx');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_Editor2.default, {
  getContentAction: printHTML,
  hideButtonAction: closeEditor,
  placeholder: "do somenthing!",
  defaultHTML: '<p>hello world</p> <br /> <b>text</b><i>italic</i>',
  focus: true
}), document.getElementById('root'));
// import Editor from './Editor.jsx'


function printHTML(content) {
  console.log("func ok", content);
}

function closeEditor() {
  console.log("close");
}