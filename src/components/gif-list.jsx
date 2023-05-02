import React, { Component } from 'react';
import Gif from './gif';

class Giflist extends Component {
  constructor(props) {
    super(props);
    this.source = `https://media0.giphy.com/media/${props.id}/giphy/200w.webp`;
  }

  render () {
    const { gifs } = this.props;
    return (
      <div className="gif-list">
        {gifs.map((gif) => {
          return <Gif id={gif} key={gif} />;
        })}
      </div>
    );
  }
}

export default Giflist;
