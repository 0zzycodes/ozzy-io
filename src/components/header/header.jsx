import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import menuButton from '../../assets/menuButton.svg';
import close from '../../assets/close.svg';
import './header.scss';
import Hero from '../hero/hero';
const Header = () => {
  const [isShow, setisShow] = useState(false);
  const toggleMenu = () => {
    setisShow(!isShow);
  };
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-links container">
          <div className="show">
            <div className="brand">
              <Link to="/">
                <img src={logo} alt="LOGO" className="logo-icon" />
                ZZY
              </Link>
            </div>

            <img
              src={isShow ? close : menuButton}
              className="menu-button"
              alt="Menu Icon"
              onClick={toggleMenu}
            />
          </div>
          <div className="options">
            {isShow ? (
              <div className="links">
                <Link to="#about" className="option">
                  ABOUT
                </Link>
                <br />
                <Link to="#service" className="option">
                  SERVICE
                </Link>
                <br />
                <Link to="#work" className="option">
                  PORTFOLIO
                </Link>
                <br />
                <Link to="#contact" className="option">
                  CONTACT
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
