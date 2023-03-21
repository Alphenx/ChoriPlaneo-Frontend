import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import HandleTheme from '../HandleTheme/HandleTheme';
import { HeaderStyled } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyled className="header">
      <div className="logo">
        <img src="/assets/imgs/logo.png" alt="logo" />
        <div className="theme">
          <HandleTheme />
        </div>
      </div>
      <nav>
        <Link to={''}>
          <AiIcons.AiOutlineStar className="icon selected" />
          <h2>Plans</h2>
        </Link>
        <Link to={''}>
          <AiIcons.AiOutlineShareAlt className="icon " />
          <h2>Social</h2>
        </Link>
        <Link to={''}>
          <BsIcons.BsCalendar2CheckFill className="icon selected" />
          <h2>My plans</h2>
        </Link>
        <Link to={''}>
          <BsIcons.BsPersonCircle className="icon " />
          <h2>Profile</h2>
        </Link>
        <Link to={''}>
          <AiIcons.AiOutlineLogout className="icon  " />
          <h2>Log out</h2>
        </Link>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
