import React from 'react';
import { FOOD, WOOD, ROCK, GOLD } from '../constans/constans';
import digits from '../helper/digits';

const ResourceInput = ({ el, value, index, onChange }) => {
  let resourceValue;
  if (el === 'food') {
    resourceValue = FOOD[index];
  } else if (el === 'wood') {
    resourceValue = WOOD[index];
  } else if (el === 'rock') {
    resourceValue = ROCK[index];
  } else if (el === 'gold') {
    resourceValue = GOLD[index];
  } else {
    resourceValue = 'null';
  }
  return (
    <div className="resource-input">
      <div> {digits(resourceValue)}</div>
      <div> {digits(resourceValue * value)}</div>
      <input
        type="number"
        placeholder={resourceValue}
        value={value}
        onChange={e => onChange(el, index, e.target.value)}
      />
    </div>
  );
};

export default ResourceInput;
