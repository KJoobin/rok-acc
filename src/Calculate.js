import React from 'react';
import { TIME_TO_MIN } from './constans';

const Calculate = ({ data }) => {
  let cal = 0;
  for (let i = 0; i < data.length; i += 1) {
    cal += TIME_TO_MIN[i] * data[i];
  }
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
    <div>
      <div>
        {' '}
        총 {days && `${days}일`}
        {hour && `${hour}시간`}
        {cal && `${cal}분`}
      </div>
    </div>
  );
};

export default Calculate;
