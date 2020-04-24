import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = props => {
  return (
    <div className="Nav">
      <Link
        to="/acc"
        className={props.nav === 'speed' ? 'on' : 'off'}
        onClick={() => props.onClick('speed')}
      >
        가속 계산기
      </Link>
      <Link
        to="/resource"
        className={props.nav === 'money' ? 'on' : 'off'}
        onClick={() => props.onClick('money')}
      >
        자원 계산기
      </Link>
      <Link
        to="/training"
        className={props.nav === 'soldier' ? 'on' : 'off'}
        onClick={() => props.onClick('soldier')}
      >
        훈련 계산기
      </Link>
    </div>
  );
};

export default Nav;
