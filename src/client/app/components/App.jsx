// Parent component for the entire application

import React from 'react';
import { imageData } from './data.js';
import SearchBar from './SearchBarComponent.jsx';
import Images from './ImagesComponent.jsx';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="main">
        <SearchBar {...this.props}/>
        <Images imageData={imageData} {...this.props}/>
      </div>
    );
  }
}