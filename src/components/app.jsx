import React, { Component } from 'react';

import Search from './search-bar';
import Gif from './gif';
import Giflist from './gif-list';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGif: "26tPghhb310muUkEw",
      gifs: ["LTYT5GTIiAMBa", "26tPghhb310muUkEw", "bq6F8QYqBU7Yc"]
    };
  }

  handleEvent = () => {
    this.setState({
      // Change state at event (ex: clicked: !this.state.clicked)
      selectedGif: "26tPghhb310muUkEw"
    });
  }

  // render example
  render () {
    const { selectedGif, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <Search />
          <div className="selected-gif">
            <Gif id={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <Giflist gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
