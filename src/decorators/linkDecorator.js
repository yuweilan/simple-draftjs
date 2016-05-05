import Link from '../components/Link';
import {CompositeDecorator, Entity} from 'draft-js';

/**
 * Find Links in Editor for add to Editor Map
 * @param  {Object}   contentBlock
 * @param  {Function} callback
 * @return {Object}
 */
function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        Entity.get(entityKey).getType() === 'LINK'
      );
    },
    callback
  );
}

export default new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  },
]);
