'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = _immutable2.default.Map({
  'bold': { label: 'B', style: 'BOLD', classname: 'bold', type: 'inline' },
  'italic': { label: 'I', style: 'ITALIC', classname: 'italic', type: 'inline' },
  'underline': { label: 'U', style: 'UNDERLINE', classname: 'underline', type: 'inline' },
  'h1': { label: 'H1', style: 'h1', classname: 'h1', type: 'inline' },
  'h2': { label: 'H2', style: 'h2', classname: 'h2', type: 'inline' },
  'h3': { label: 'H3', style: 'h3', classname: 'h3', type: 'inline' },
  'h4': { label: 'H4', style: 'h4', classname: 'h4', type: 'inline' },
  'unordered-list': { label: 'List', style: 'unordered-list-item', classname: 'list', type: 'block' },
  'ordered-list': { label: 'Ordered List', style: 'ordered-list-item', classname: 'ordered-list', type: 'block' },
  'image': { label: 'Image', style: 'IMAGE', classname: 'image', type: 'image' },
  'link': { label: 'Link', style: 'LINK', classname: 'link', type: 'link' },
  'unlink': { label: 'Unlink', style: 'UNLINK', classname: 'unlink', type: 'unlink' },
  'code': { label: '>_', style: 'code-block', classname: 'code', type: 'block' },
  'blockquote': { label: 'Blockquote', style: 'blockquote', classname: 'code', type: 'block' },
  'separator': { type: 'separator' }
});

var getControl = function getControl(action) {
  return (0, _objectAssign2.default)({}, action, options.get(action.name.trim()));
};

exports.default = function (arrayOptions) {
  return arrayOptions.map(function (action) {
    return getControl(action);
  }).filter(function (action) {
    return typeof action !== 'undefined' && action !== {};
  });
};