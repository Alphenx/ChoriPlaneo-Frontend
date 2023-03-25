import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import HandleTheme from '../HandleTheme/HandleTheme';
import { HeaderStyled } from './HeaderStyled';

const Header = () => {
  const { pathname } = useLocation();

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('userEmail');
  };
  return (
    <HeaderStyled className="header">
      <div className="logo">
        <img src="/assets/imgs/logo.png" alt="logo" />
        <div className="theme">
          <HandleTheme />
        </div>
      </div>
      <nav>
        <Link to={'/app'}>
          <AiIcons.AiOutlineStar
            data-testid="Plans icon"
            className={`icon ${pathname === '/app' ? 'selected' : ''}`}
          />
          <h2>Plans</h2>
        </Link>
        <Link to={''}>
          <AiIcons.AiOutlineShareAlt
            data-testid="Social icon"
            className="icon "
          />
          <h2>Social</h2>
        </Link>
        <Link to={'/app/my-plans'}>
          <BsIcons.BsCalendar2CheckFill
            data-testid="My plans icon"
            className={`icon ${pathname === '/app/my-plans' ? 'selected' : ''}`}
          />
          <h2>My plans</h2>
        </Link>
        <Link to={''}>
          <BsIcons.BsPersonCircle className="icon" />
          <h2>Profile</h2>
        </Link>
        <Link to={'/'} onClick={() => handleLogout()} data-testid="Log out">
          <AiIcons.AiOutlineLogout className="icon" />
          <h2>Log out</h2>
        </Link>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
