// == Import NPM
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// == Import image
import logo from '../../assets/images/logo.png';

// == Import Components
import Menu from './Menu';
import BurgerMenu from './BurgerMenu';

// == Import style
import './style.scss';

const Header = ({ open }) => (
  <div className="header">
    <div className="header__logo">
      <NavLink to="/">
        <img className="header__logo__item" src={logo} alt="logo WRDB" />
      </NavLink>
    </div>
    <div className="header__links">
      <ul className="header__links__list">
        <a
          href="https://github.com/WilliamRdb"
          target="_blank"
          rel="noreferrer"
        >
          <li className="header__links__list__item">
            <FaGithub size={30} style={{ fill: '#205E6F' }} />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/williamrdb/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="header__links__list__item">
            <FaLinkedin size={30} style={{ fill: '#205E6F' }} />
          </li>
        </a>
      </ul>
    </div>
    <div className="header__menu">
      <BurgerMenu open={open} />
      <Menu />
    </div>
  </div>
);

Header.propTypes = {
  open: PropTypes.func.isRequired,
};

export default Header;
