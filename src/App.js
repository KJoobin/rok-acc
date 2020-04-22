import React, { Component } from 'react';
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
      <div className="App">
        <Nav nav={this.state.nav} onClick={this.onNav} />
        <Body nav={this.state.nav} />
      </div>
    );
  }
}

export default App;
