import React from 'react';
import { FOOD, ROCK, GOLD } from '../constans/constans';
import digits from '../helper/digits';

function ResourceCal({ data, category }) {
  let valueable;
  if (category === 'food' || category === 'wood') {
    valueable = FOOD.slice();
  } else if (category === 'rock') {
    valueable = ROCK.slice();
  } else {
    valueable = GOLD.slice();
  }
  const total = data.reduce((acc, cur, index) => {
    if (cur) {
      return acc + cur * valueable[index];
    }
    return acc;
  }, 0);
  return (
    <div>
      <span>총 </span>
      <span>{digits(total)}</span>
    </div>
  );
}
export default ResourceCal;
