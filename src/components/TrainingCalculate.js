import React from 'react';
import { TIME_TO_MIN } from '../constans/constans';

const TrainingCalculate = ({ acc, cur }) => {
  let totalAcc = 0;
  for (let i = 0; i < acc.length; i += 1) {
    totalAcc += acc[i] * TIME_TO_MIN[i];
  }
  totalAcc *= 60;
  const oneT = Math.floor(totalAcc / (15 / cur));
  const twoT = Math.floor(totalAcc / (30 / cur));
  const threeT = Math.floor(totalAcc / (60 / cur));
  const fourT = Math.floor(totalAcc / (80 / cur));
  const fiveT = Math.floor(totalAcc / (120 / cur));
  return (
    <div className="TrainingCal">
      <div>
        <span>
          1T : {oneT}마리, {oneT * 1} 전투력
        </span>
      </div>
      <div>
        <span>
          2T : {twoT}마리, {twoT * 2} 전투력
        </span>
      </div>
      <div>
        <span>
          3T : {threeT}마리, {threeT * 3} 전투력
        </span>
      </div>
      <div>
        <span>
          4T : {fourT}마리, {fourT * 4} 전투력
        </span>
      </div>
      <div>
        <span>
          5T : {fiveT}마리, {fiveT * 10} 전투력
        </span>
      </div>
    </div>
  );
};
export default TrainingCalculate;
