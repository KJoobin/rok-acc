import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Body from './Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'speed',
    };
    this.onNav = this.onNav.bind(this);
  }
  onNav(nav) {
    this.setState({ nav });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav nav={this.state.nav} onClick={this.onNav} />
          <Body nav={this.state.nav} />
        </div>
      </Router>
    );
  }
}

export default App;
