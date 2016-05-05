'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (editorState) {
  var className = 'RichEditor-editor';
  var contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder';
    }
  }
  return className;
};