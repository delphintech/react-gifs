import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.selectFunction = props.selectFunction;
  }

  handleClick = (event) => {
    this.selectFunction(event.target.alt);
  }

  render () {
    this.source = `https://media0.giphy.com/media/${this.props.id}/giphy/200w.webp`;
    return (
      <img src={this.source} alt={this.props.id} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
