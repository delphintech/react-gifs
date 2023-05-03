import React, { Component } from 'react';
import Gif from './gif';

class Giflist extends Component {
  constructor(props) {
    super(props);
    this.gifs = props.gifs;
  }

  render () {
    return (
      <div className="gif-list">
        {this.props.gifs.map((gif) => {
          return <Gif id={gif.id} key={gif.id} selectFunction={this.props.selectFunction} />;
        })}
      </div>
    );
  }
}

export default Giflist;
