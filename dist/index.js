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
  inactive: true,
  defaultHTML: '<h1>hello world</h1> <br /> <b>text</b><i>italic</i>'
}), document.getElementById('root'));
// import Editor from './Editor.jsx'


function printHTML(content) {
  console.log("func ok");
}

function closeEditor() {
  console.log("close");
}