import React from 'react';
import Speed from './Speed';
import { Switch, Route } from 'react-router-dom';
import './Body.css';

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
