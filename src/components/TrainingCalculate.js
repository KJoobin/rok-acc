import React from 'react';
import { TIME_TO_MIN } from '../constans/constans';
import digits from '../helper/digits';

const TrainingCalculate = ({ acc, cur, general, useGeneral }) => {
  let totalAcc = 0;
  for (let i = 0; i < acc.length; i += 1) {
    totalAcc += acc[i] * TIME_TO_MIN[i];
  }
  if (useGeneral) {
    for (let i = 0; i < general.length; i += 1) {
      totalAcc += general[i] * TIME_TO_MIN[i];
    }
  }
  totalAcc *= 60;
  const oneT = Math.floor(totalAcc / (15 / cur));
  const twoT = Math.floor(totalAcc / (30 / cur));
  const threeT = Math.floor(totalAcc / (60 / cur));
  const fourT = Math.floor(totalAcc / (80 / cur));
  const fiveT = Math.floor(totalAcc / (120 / cur));
  const mapping = [oneT, twoT, threeT, fourT, fiveT].map((el, idx) => {
    let toString = el.toString();
    let power = el * (idx + 1);
    if (idx === 4) {
      power = el * 10;
    }
    power = power.toString();
    return { string: digits(toString), number: digits(power) };
  });
  return (
    <div className="TrainingCal">
      {mapping.map((el, index) => (
        <div key={index}>
          <span>
            {index + 1}T : {el.string} 마리 / {el.number}
            전투력
          </span>
        </div>
      ))}
    </div>
  );
};
export default TrainingCalculate;
