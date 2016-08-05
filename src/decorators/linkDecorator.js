import Link from '../components/Link';
import Image from '../components/Image';
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

function findImageEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      if (entityKey !== null && Entity.get(entityKey).getType() === 'IMAGE') {
        debugger
        console.log(Entity.get(entityKey).getType());
      }
      return (
        entityKey !== null &&
        Entity.get(entityKey).getType() === 'IMAGE'
      );
    }
  );
}

export default new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  },
/*  {
    strategy: findImageEntities,
    component: Image,
  }*/
]);
