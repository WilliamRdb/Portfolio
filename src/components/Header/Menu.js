import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <ul className="header__menu__nav">
    <li className="header__menu__nav__item">
      <NavLink
        to="/"
        activeClassName="active"
        exact
      >
        Accueil
      </NavLink>
    </li>
    <li className="header__menu__nav__item">
      <NavLink
        to="/a-propos-de-moi"
        activeClassName="active"
      >
        A propos de moi
      </NavLink>
    </li>
    <li className="header__menu__nav__item">
      <NavLink
        to="/portfolio"
        activeClassName="active"
      >
        Portfolio
      </NavLink>
    </li>
    <li className="header__menu__nav__item">
      <NavLink
        to="/contactez-moi"
        activeClassName="active"
      >
        Contactez-moi
      </NavLink>
    </li>
  </ul>
);

export default Menu;
