import React from 'react';
import Speed from '../containers/SpeedContainer';
import { Switch, Route } from 'react-router-dom';
import '../style/Body.css';

const Body = props => {
  return (
    <Switch>
      <Route exact path="/">
        <Speed />
      </Route>
    </Switch>
  );
};

export default Body;
