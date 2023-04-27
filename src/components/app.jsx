import React, { Component } from 'react';

import Search from './search-bar';
import Gif from './gif';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial state (ex: clicked: false)
    };
  }

  handleEvent = () => {
    this.setState({
      // Change state at event (ex: clicked: !this.state.clicked)
    });
  }

  // render example
  render () {
    return (
      <div>
        <div className="left-scene">
          <Search />
          <Gif />
        </div>
        <div className="right-scene">
        </div>
      </div>
    );
  }
}

export default App;
