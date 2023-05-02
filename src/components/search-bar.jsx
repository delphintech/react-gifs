import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.searchFunction = props.searchFunction;
  }

  handleChange = (event) => {
    const { query } = this.state;
    this.setState({
      query: event.target.value
    });
    this.searchFunction(query);
  }

  // render example
  render () {
    return (
      <input className="form-control form-search" onChange={this.handleChange} />
    );
  }
}

export default Search;
