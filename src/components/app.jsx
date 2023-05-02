import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search-bar';
import Gif from './gif';
import Giflist from './gif-list';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGif: "26tPghhb310muUkEw",
      gifs: [{ id: "LTYT5GTIiAMBa" }, { id: "26tPghhb310muUkEw" }, { id: "bq6F8QYqBU7Yc" }]
    };
  }

  searchFunction = (query) => {
    giphy("VMcVxgJtUXFpSGEB1h67ilEuwYcNDUi3").search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      // Res contains gif data!
      this.setState({
        // Change state at event (ex: clicked: !this.state.clicked)
        gifs: res.data
      });
    });
  }

  // render example
  render () {
    const { selectedGif } = this.state;
    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.searchFunction} />
          <div className="selected-gif">
            <Gif id={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <Giflist gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
