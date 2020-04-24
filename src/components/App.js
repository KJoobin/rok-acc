import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Body from '../containers/BodyContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Body />
        </div>
      </Router>
    );
  }
}

export default App;
