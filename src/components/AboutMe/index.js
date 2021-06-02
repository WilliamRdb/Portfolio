// == Import React
import React, { useState } from 'react';
// == Import Style
import './style.scss';

const AboutMe = () => {
  const [value, setValue] = useState('Experiences');
  const handleOnClick = (e) => {
    setValue(e.target.innerText);
  };
  return (
    <>
      <div className="about">
        <div className="about__left">
          <div className="about__left__picture">
            <h2 className="about__left__picture__title">Qui suis-je ?</h2>
          </div>
        </div>
        <div className="about__right">
          <div className="about__right__resume">
            <p className="about__right__resume__content">
              <span className="about__right__resume__content__span">Moi c'est William !</span><span className="about__right__resume__content__span2">Jeune développeur Web👨🏽‍💻</span>
              <br />
              Après 10 années passées en tant que commercial,
              j'ai entamé en 2020 ma grande aventure vers le monde digital
              et plus particulièrement le développement Web.
              Quelques cours en autodidacte plus tard, je m'inscris
              à l'organisme de formation O'Clock, cursus Développeur Web et Web mobile JS.
              J'ai pu approfondir mes connaissances en
              HTML, CSS, JS et découvrir Node, Express, Sequelize, React et Redux.
              <br />
              <br />
              Je suis à la recherche constantes de nouvelles connaissances
              (Junior for life) et peauffine aux petits oignons
              les projets sur lequels je me lance.
              <br />
              <br />
              Sportif ⚽️ 🏈, danseur 🕺🏼 et amateur de jeux vidéo 🎮 ,
              je suis un vrai compétiteur dans l'âme !
            </p>
            <div className="about__right__skills">
              <ul className="about__right__skills__tags">
                <li className="about__right__skills__tags__item">React.js</li>
                <li className="about__right__skills__tags__item">Redux</li>
                <li className="about__right__skills__tags__item">JavaScript</li>
                <li className="about__right__skills__tags__item">HTML5</li>
                <li className="about__right__skills__tags__item">CSS3</li>
                <li className="about__right__skills__tags__item">Node.js</li>
                <li className="about__right__skills__tags__item">Express</li>
                <li className="about__right__skills__tags__item">Sequelize</li>
                <li className="about__right__skills__tags__item">PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="experiences">
        <div className="experiences__title">
          <span
            className="experiences__title__content"
            onClick={handleOnClick}
          >
            Formations
          </span>
          <span
            className="experiences__title__content"
            onClick={handleOnClick}
          >
            Expériences
          </span>
        </div>
        {value === 'Formations' ? (
          <div className="experiences__studies">
            <div className="experiences__studies__item">
              <h3 className="experiences__studies__item__title">O'Clock</h3>
              <p className="experiences__studies__item__date">Nov 2020 - Mai 2021</p>
              <p className="experiences__studies__item__infos">Labélisé Grande Ecole du Numérique</p>
              <p className="experiences__studies__item__description">Développeur Web et Web mobile, j'ai suivi le cursus en   téléprésentiel de développeur Fullstack JS, sur le format suivant: </p>
              <ul className="experiences__studies__item__description__list">
                <li className="experiences__studies__item__description__list__item">3 mois de socle: Découverte de HTML, CSS, JavaScript côté client et Node.JS, Express, Sequelize et PostgreSQL côté serveur et déploiement.</li>
                <li className="experiences__studies__item__description__list__item">1 mois de spécialisation: Apprentissage de React.Js et de Reudx, Test Unitaires</li>
                <li className="experiences__studies__item__description__list__item">Appothéose : 1 mois de projet de la découverte du besoin à la présentation client de l'application Web</li>
              </ul>
              Projet développé :
              <a
                href="https://github.com/WilliamRdb/GrainedeFood-Front"
                target="_blank"
                className="experiences__studies__item__description__link"
                rel="noreferrer"
              >
                GrainedeFood
              </a>
            </div>
            <div className="experiences__studies__item">
              <h3 className="experiences__studies__item__title">#SupDeWeb</h3>
              <p className="experiences__studies__item__date">Sept 2013 - Juin 2014</p>
              <p className="experiences__studies__item__infos">Master E-commerce en alternance</p>
              <p className="experiences__studies__item__description">formation 4ème/5ème année dans le but de former les futurs managers du digital marketing et du E-commerce:</p>
              <ul className="experiences__studies__item__description__list">
                <li className="experiences__studies__item__description__list__item">Piloter un projet d’e-marketing</li>
                <li className="experiences__studies__item__description__list__item">Gérer un projet internet</li>
                <li className="experiences__studies__item__description__list__item">Générer du trafic sur site</li>
                <li className="experiences__studies__item__description__list__item">Fidéliser les e-clients</li>
                <li className="experiences__studies__item__description__list__item">Définir une stratégie web</li>
                <li className="experiences__studies__item__description__list__item">Analyser les statistiques du site et le retour sur investissement (ROI) des actions de communication</li>
                <li className="experiences__studies__item__description__list__item">Maximiser les revenus</li>
              </ul>
              Entreprise d'accueil :
              <a
                href="https://www.carrevolutis.com"
                target="_blank"
                className="experiences__studies__item__description__link"
                rel="noreferrer"
              >
                CarréVolutis - marque DogFinance
              </a>
            </div>
          </div>
        ) : (
          <div className="experiences__jobs">
            <div className="experiences__jobs__item">
              <h3 className="experiences__jobs__item__title">Développeur Web Front/Back Js</h3>
              <p className="experiences__jobs__item__date">Avril 2021 - Mai 2021</p>
              <p className="experiences__jobs__item__infos">Client :
                <a
                  href="https://www.instagram.com/grainedemagie/"
                  target="_blank"
                  className="experiences__jobs__item__infos__link"
                  rel="noreferrer"
                >
                  GrainedeMagie
                </a>
              </p>
              <p className="experiences__jobs__item__description">Pour le compte de l’influenceur GraineDeMagie, réalisation de sa nouvelle plateforme Web de vente de Box mensuelle, orientée produits du terroir Français.
                <br />
                Product Owner de ce projet avec une équipe de 4 développeurs
                <br />
                Réalisation du Cahier des Charges, Wireframes, MCD/MLD
                <br />
                <br />
                Technologies utilisées :
              </p>
              <ul className="experiences__jobs__item__description__list">
                <li className="experiences__jobs__item__description__list__item">HTML</li>
                <li className="experiences__jobs__item__description__list__item">SCSS</li>
                <li className="experiences__jobs__item__description__list__item">JavaScript</li>
                <li className="experiences__jobs__item__description__list__item">React.Js</li>
                <li className="experiences__jobs__item__description__list__item">Redux</li>
                <li className="experiences__jobs__item__description__list__item">Semantic UI</li>
                <li className="experiences__jobs__item__description__list__item">Node.Js</li>
                <li className="experiences__jobs__item__description__list__item">Express</li>
                <li className="experiences__jobs__item__description__list__item">PostgreSQL</li>
                <li className="experiences__jobs__item__description__list__item">Sequelize</li>
                <li className="experiences__jobs__item__description__list__item">Stripe</li>
              </ul>
              Projet développé :
              <a
                href="https://github.com/WilliamRdb/GrainedeFood-Front"
                target="_blank"
                className="experiences__jobs__item__description__link"
                rel="noreferrer"
              >
                GrainedeFood
              </a>
            </div>
            <div className="experiences__jobs__item">
              <h3 className="experiences__jobs__item__title">Chargé d’affaires</h3>
              <p className="experiences__jobs__item__date">Dec 2011 - Juin 2020</p>
              <p className="experiences__jobs__item__infos">Ile de France</p>
              <p className="experiences__jobs__item__description">Chargé d’affaires, en tant que salarié, pour le compte d’entreprises.
                <br />
                Gestion avant et après ventes de biens et services et
                coordination des équipes en mode projet
                <br />
                <br />
                Les entreprises:
              </p>
              <ul className="experiences__jobs__item__description__list">
                <li className="experiences__jobs__item__description__list__item">Sofame</li>
                <li className="experiences__jobs__item__description__list__item">Dogfinance</li>
                <li className="experiences__jobs__item__description__list__item">Ricoh</li>
                <li className="experiences__jobs__item__description__list__item">Quotatis</li>
                <li className="experiences__jobs__item__description__list__item">Serfa</li>
                <li className="experiences__jobs__item__description__list__item">Groupe Horus</li>
              </ul>
              <div />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AboutMe;
