import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/logo.png';
// import logoLight from '../../assets/logoLight.png';
import logoDark from '../../assets/logoDark.png';
import './header.scss';
import Hero from '../hero/hero';
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar container">
        <Link to="/">
          <img src={logoDark} alt="LOGO" className="logo" />
        </Link>
        <div className="options">
          <Link to="/shop" className="option">
            ABOUT
          </Link>
          <Link to="/gallery" className="option">
            PORTFOLIO
          </Link>
          <Link to="/training" className="option">
            CONTACT
          </Link>
        </div>
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
