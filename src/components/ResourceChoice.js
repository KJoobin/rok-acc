import React from 'react';
import { FOOD, WOOD, ROCK, GOLD } from '../constans/constans';
import digits from '../helper/digits';

function ResourceChoice({ el, value, index, choice, onChange }) {
  let title = '식량';
  let valueable = FOOD[index + 1];
  if (choice === 'wood') {
    title = '나무';
    valueable = WOOD[index + 1];
  } else if (choice === 'rock') {
    title = '돌';
    valueable = ROCK[index + 1];
  } else if (choice === 'gold') {
    title = '금화';
    valueable = GOLD[index + 1];
  }
  return (
    <div className="resource-input">
      <div>
        {title} - {valueable}
      </div>
      <div> {digits(valueable * value)} </div>
      <input
        type="number"
        onChange={e => onChange(el, index, e.target.value)}
        placeholder={`${title}-${valueable}`}
        value={value}
      />
    </div>
  );
}

export default ResourceChoice;
