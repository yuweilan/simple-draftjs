import React, { Component } from 'react';
import { injectProps } from 'relpers';
import { Entity } from 'draft-js';


class Link extends Component {

  /**
   * Link component decorator for Editor
   * @param  {Object} options.children
   * @param  {Object} options.entityKey data of link object
   * @return {Component}
   */
  @injectProps
  render({children, entityKey}) {
    const {url} = Entity.get(entityKey).getData();
    return (
      <a href={url}>
        {children}
      </a>
    );
  }
}

export default Link;
