// == Import React
import React, { useState, useEffect } from 'react';
// == Import Axios
import axios from 'axios';
// == Import Style
import './style.scss';
import { BsFillStarFill } from 'react-icons/bs';

const Portfolio = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get('https://api.github.com/users/WilliamRdb/repos');
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const listRepo = data.map((repo) => (
    <li className="portfolio__main__content__list" key={repo.id}>
      <a
        href={repo.html_url}
        className="portfolio__main__content__list__link"
        target="_blank"
        rel="noreferrer"
      >
        <div className="portfolio__main__content__list__repo">
          <h2 className="portfolio__main__content__list__repo__title">{repo.name}</h2>
          <p className="portfolio__main__content__list__repo__description">{repo.description}</p>
          <div className="portfolio__main__content__list__repo__other">
            <p className="portfolio__main__content__list__repo__other__count"><BsFillStarFill /> {repo.watchers_count}</p>
            <p className="portfolio__main__content__list__repo__other__lang">{repo.language === null ? ('Pas de langage spécifié') : (repo.language)} </p>
          </div>
        </div>
      </a>
    </li>
  ));
  return (
    <div className="portfolio">
      <div className="portfolio__img">
        <h1 className="portfolio__img__title">Projets</h1>
      </div>
      <div className="portfolio__main">
        <ul className="portfolio__main__content">
          {listRepo}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
