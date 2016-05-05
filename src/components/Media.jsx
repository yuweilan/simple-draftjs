import React, { Component } from 'react';
import {
  Entity,
} from 'draft-js';

const Audio = (props) => {
  return <audio controls src={props.src} />;
};

const Image = (props) => {
  return <img src={props.src}/>;
};

const Video = (props) => {
  return <video controls src={props.src}/>;
};

class Media extends Component {

  render() {
    const entity = Entity.get(this.props.block.getEntityAt(0));
    const {src} = entity.getData();
    const type = entity.getType();
    let media;
    if (type === 'AUDIO') {
      media = <Audio src={src} />;
    } else if (type === 'IMAGE') {
      media = <Image src={src} />;
    } else if (type === 'VIDEO') {
      media = <Video src={src} />;
    }
    return media;
  }
}

export default Media;
