import React, { Component } from 'react';

import Search from './search-bar';
import Gif from './gif';
import Giflist from './gif-list';


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
          <div className="selected-gif">
            <Gif id="KZeKpFsTB3uGntA3f5" />
          </div>
        </div>
        <div className="right-scene">
          <Giflist />
        </div>
      </div>
    );
  }
}

export default App;
