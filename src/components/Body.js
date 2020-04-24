import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../style/Body.css';
import Speed from '../containers/SpeedContainer';
import Training from '../containers/Training';

class Body extends Component {
  constructor(props) {
    super(props);
    this.setSpeedData = this.setSpeedData.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  setSpeedData() {
    const data = JSON.stringify(this.props.acc);
    localStorage.setItem('speed', data);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.setSpeedData);
  }

  componentDidMount() {
    let loadData = localStorage.getItem('speed');
    if (loadData) {
      const parseData = JSON.parse(loadData);
      for (let key in parseData) {
        if (!parseData[key].data) {
          localStorage.removeItem('speed');
          loadData = false;
        }
      }
      if (loadData) {
        this.props.setInitial(JSON.parse(loadData));
      }
    }
    window.addEventListener('beforeunload', this.setSpeedData);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Speed />
        </Route>
        <Route path="/training">
          <Training />
        </Route>
      </Switch>
    );
  }
}

export default Body;
