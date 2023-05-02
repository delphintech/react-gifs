import React, { Component } from 'react';
import Gif from './gif';

class Giflist extends Component {
  constructor(props) {
    super(props);
    this.gifs = props.gifs;
  }

  handleClick = (event) => {
    console.log(event.target);
  }

  render () {
    return (
      <div className="gif-list">
        {this.gifs.map((gif) => {
          return <Gif id={gif.id} key={gif.id} onClick={this.handleClick} />;
        })}
      </div>
    );
  }
}

export default Giflist;
