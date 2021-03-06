import React from 'react';
import { TIME_TO_MIN, TIME_NAME } from '../constans/constans';
import digits from '../helper/digits';
const TimeInput = ({ type, index, value, onChange }) => {
  let cal = TIME_TO_MIN[index] * value;
  let days;
  let hour;
  if (cal > 1440) {
    days = Math.floor(cal / 60 / 24);
    cal -= days * 60 * 24;
  }
  if (cal > 60) {
    hour = Math.floor(cal / 60);
    cal -= hour * 60;
  }
  return (
    <div className="TimeInput">
      <div>{TIME_NAME[index]}</div>
      <div>
        {days && `${digits(days)}일`}
        {hour && `${hour}시간`}
        {cal > 0 && `${cal}분`}
      </div>
      <div>
        <input
          type="number"
          placeholder={TIME_NAME[index]}
          onChange={e => onChange(type, index, e)}
          value={value}
        />
      </div>
    </div>
  );
};
export default TimeInput;
