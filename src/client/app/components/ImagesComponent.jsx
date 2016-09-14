import React from 'react';
import SingleImage from './SingleImage.jsx';

export default class Images extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="big-image-div">
        {this.props.imageData.map((image, index) => {
          return (
            <div key={index} className="outerCard">
              <SingleImage image={image} {...this.props}/>
            </div>
          );
        })}
    </div>
    );
  }
}