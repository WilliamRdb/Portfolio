// == Import React
import React from 'react';
import { Link } from 'react-router-dom';

// == Import Assets
import picture from '../../assets/images/personal_picture.jpeg';

// == Import style
import './style.scss';
import { BsFillCircleFill } from 'react-icons/bs';

const Home = () => (
  <div className="home">
    <div className="home__left">
      <p className="home__left__title"> Bonjour,</p>
      <p className="home__left__title"> C'est William RENE-DIT-BOIS</p>
      <p className="home__left__description"> Développeur Web Front-End </p>
      <div className="home__left__spe">
        <BsFillCircleFill className="home__left__spe__circle" />
        <p className="home__left__spe__content"> React JS </p>
        <BsFillCircleFill className="home__left__spe__circle" />
        <p className="home__left__spe__content"> Redux </p>
        <BsFillCircleFill className="home__left__spe__circle" />
        <p className="home__left__spe__content">  Node JS </p>
      </div>
      <div className="home__left__link">
        <Link to="/contactez-moi">
          <button
            type="submit"
            className="home__left__link__button"
          >
            Envoyer moi un mail
          </button>
        </Link>
        <Link to="/portfolio">
          <button
            type="submit"
            className="home__left__link__button"
          >
            Portfolio
          </button>
        </Link>
      </div>
    </div>
    <div className="home__right">
      <div className="home__right__circle">
        <img
          className="home__right__circle__picture"
          src={picture}
          alt="profil William"
        />
      </div>
    </div>
  </div>
);

export default Home;
