import React, { Component } from 'react';
import { injectProps } from 'relpers';
import { Entity } from 'draft-js';


class Image extends Component {

  /**
   * Link component decorator for Editor
   * @param  {Object} options.children
   * @param  {Object} options.entityKey data of link object
   * @return {Component}
   */
  @injectProps
  render({children, entityKey}) {
    const {src, alt} = Entity.get(entityKey).getData();
    return (
      <img src={src} alt={alt ? alt : ""} />
    );
  }
}

export default Image;
