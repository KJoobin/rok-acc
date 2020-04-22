import React from 'react';
import { TIME_TO_MIN, TIME_NAME } from './constans';

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
        {days && `${days}일`}
        {hour && `${hour}시간`}
        {cal > 0 && `${cal}분`}
      </div>
      <input
        placeholder={TIME_NAME[index]}
        onChange={e => onChange(type, index, e)}
        value={value}
      />
    </div>
  );
};
export default TimeInput;
