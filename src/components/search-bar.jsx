import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  // render example
  render () {
    return (
      <input className="form-control form-search" onChange={this.handleChange} />
    );
  }
}

export default Search;
