'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Link = require('../components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Image = require('../components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Find Links in Editor for add to Editor Map
 * @param  {Object}   contentBlock
 * @param  {Function} callback
 * @return {Object}
 */
function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'LINK';
  }, callback);
}

function findImageEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    if (entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'IMAGE') {
      debugger;
      console.log(_draftJs.Entity.get(entityKey).getType());
    }
    return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'IMAGE';
  });
}

exports.default = new _draftJs.CompositeDecorator([{
  strategy: findLinkEntities,
  component: _Link2.default
}]);