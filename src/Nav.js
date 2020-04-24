import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div className="Nav">
      <Link
        to="/"
        className={useRouteMatch({ path: '/', exact: true }) ? 'on' : 'off'}
      >
        가속 계산기
      </Link>
      <Link
        to="/resource"
        className={
          useRouteMatch({ path: '/resource', exact: true }) ? 'on' : 'off'
        }
      >
        자원 계산기
      </Link>
      <Link
        to="/training"
        className={
          useRouteMatch({ path: '/training', exact: true }) ? 'on' : 'off'
        }
      >
        훈련 계산기
      </Link>
    </div>
  );
};

export default Nav;
