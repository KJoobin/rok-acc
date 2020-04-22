import React from 'react';
import Speed from './Speed';
import './Body.css';

const Body = props => <div>{props.nav === 'speed' && <Speed />}</div>;

export default Body;
