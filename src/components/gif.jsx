import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.source = `https://media0.giphy.com/media/${props.id}/giphy/200w.webp`;
  }

  render () {
    return (
      <img src={this.source} alt="gif" className="gif" />
    );
  }
}

export default Gif;
