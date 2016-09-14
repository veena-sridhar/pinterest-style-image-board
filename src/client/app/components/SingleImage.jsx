// Defines functions and rendering on any single image

import React from 'react';
import { toggleImage } from '../actions/ToggleImage.js';

export default class SingleImage extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (image) {
    toggleImage(image);
  }

  render () {
    var descriptionStyles = {
      'cursor': 'pointer'
    };
    if (!this.props.image.toggle) {
      return (
        <div className="innerCard">
          <img src={this.props.image.link} onClick={this.handleClick(this.props.image)} className='themePictures'/>
        </div>
      );
    } else {
      return (
        <div className="innerCard">
          <div onClick={this.handleClick(this.props.image)}>{this.props.image.description}</div>
        </div>
      );
    }
  }
}
