import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import ContactUs from '../ContactUs';

import './reset.scss';
import './style.scss';

function App() {
  const [open, setOpen] = useState(false);
  const handleOnClick = (e) => {
    e.currentTarget.classList.toggle('active');
    setOpen(!open);
  };
  return (
    <div>
      <ul className="background">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
      <div className="app">
        <Router>
        <Header open={handleOnClick} />
        {open === true ? (
          <div className="hamburger" />
        ) : (
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/a-propos-de-moi">
              <AboutMe />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contactez-moi">
              <ContactUs />
            </Route>
          </Switch>
        )}
        </Router>
      </div>
    </div>
  );
}

export default App;
