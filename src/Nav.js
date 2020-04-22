import React from 'react';
import './Nav.css';

const Nav = props => {
  return (
    <div className="Nav">
      <div
        className={props.nav === 'speed' ? 'on' : 'off'}
        onClick={() => props.onClick('speed')}
      >
        가속 계산기
      </div>
      <div
        className={props.nav === 'money' ? 'on' : 'off'}
        onClick={() => props.onClick('money')}
      >
        자원 계산기
      </div>
      <div
        className={props.nav === 'soldier' ? 'on' : 'off'}
        onClick={() => props.onClick('soldier')}
      >
        훈련 계산기
      </div>
    </div>
  );
};

export default Nav;
