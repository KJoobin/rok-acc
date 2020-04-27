import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../style/Body.css';
import Speed from '../containers/SpeedContainer';
import Resource from '../containers/ResourceContainer';
import Training from '../containers/Training';

class Body extends Component {
  constructor(props) {
    super(props);
    this.setInitialData = this.setInitialData.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  setInitialData() {
    const speed = JSON.stringify(this.props.acc);
    const resource = JSON.stringify(this.props.resource);
    localStorage.setItem('speed', speed);
    localStorage.setItem('resource', resource);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.setInitialData);
  }

  componentDidMount() {
    let loadSpeedData = localStorage.getItem('speed');
    let loadResourceData = localStorage.getItem('resource');
    if (loadSpeedData) {
      const parseData = JSON.parse(loadSpeedData);
      for (let key in parseData) {
        if (!parseData[key].data) {
          localStorage.removeItem('speed');
          loadSpeedData = false;
        }
      }
      if (loadSpeedData) {
        this.props.setInitial(JSON.parse(loadSpeedData));
      }
    }
    if (loadResourceData) {
      const parseData = JSON.parse(loadResourceData);
      for (let key in parseData) {
        if (!parseData[key].data) {
          localStorage.removeItem('resource');
          loadResourceData = false;
        }
      }
      if (loadResourceData) {
        this.props.setResource(JSON.parse(loadResourceData));
      }
    }
    window.addEventListener('beforeunload', this.setInitialData);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Speed />
        </Route>
        <Route path="/resource">
          <Resource />
        </Route>
        <Route path="/training">
          <Training />
        </Route>
      </Switch>
    );
  }
}

export default Body;
