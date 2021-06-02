import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const BurgerMenu = ({ open }) => (
  <div className="header__menu__hamburger" onClick={open}>
    <span />
    <span />
    <span />
    <div className="header__menu__hamburger__container">
      <ul>
        <li><NavLink to="/" exact>Accueil</NavLink></li>
        <li><NavLink to="/a-propos-de-moi">A propos de moi</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contactez-moi">Contactez-moi</NavLink></li>
      </ul>
    </div>
  </div>
);

BurgerMenu.propTypes = {
  open: PropTypes.func.isRequired,
};

export default BurgerMenu;
