import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/images/user.png';
import './Header.scss';

const Header = () => (
  <div className="header">
    <Link to="/">
      <div className="logo">
        Movie Appp
      </div>
    </Link>

    <div className="user-image">
      <img src={user} alt="user" />
    </div>

  </div>
);

export default Header;
