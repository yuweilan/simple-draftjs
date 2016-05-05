'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Link = require('../components/Link');

var _Link2 = _interopRequireDefault(_Link);

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

exports.default = new _draftJs.CompositeDecorator([{
  strategy: findLinkEntities,
  component: _Link2.default
}]);