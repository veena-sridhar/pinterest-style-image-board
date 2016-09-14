// Defines functions and rendering on any single image

import React from 'react';
import { toggleImage } from '../actions/ToggleImage.js';

export default class SingleImage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      toggle: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render () {
    if (!this.state.toggle) {
      return (
        <div className="innerCard">
          <img src={this.props.image.link} onClick={this.handleClick} className='themePictures'/>
        </div>
      );
    } else {
      return (
        <div className="description" onClick={this.handleClick}>{this.props.image.description}</div>
      );
    }
  }
}
