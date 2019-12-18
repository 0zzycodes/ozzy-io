import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import menuButton from '../../assets/menuButton.svg';
import close from '../../assets/close.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import Hero from '../hero/hero';
import './header.scss';

const Header = () => {
  const [isShow, setisShow] = useState(false);
  const handleScroll = e => {
    setisShow(!isShow);
  };
  const toggleMenu = () => {
    setisShow(!isShow);
  };
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-links container">
          <div className="show">
            <div className="brand">
              <a href="/">
                <img src={logo} alt="LOGO" className="logo-icon" />
              </a>
            </div>

            <img
              src={isShow ? close : menuButton}
              className="menu-button"
              alt="Menu\
                      `Icon"
              onClick={toggleMenu}
            />
          </div>
          <div className="options">
            {isShow ? (
              <div className="links">
                <div className="nav-links-2">
                  <a href="#about" onClick={handleScroll} className="option">
                    ABOUT
                  </a>
                  <br />
                  <a href="#service" onClick={handleScroll} className="option">
                    SERVICE
                  </a>
                  <br />
                  <a href="#work" onClick={handleScroll} className="option">
                    PORTFOLIO
                  </a>
                  <br />
                  <a href="#contact" onClick={handleScroll} className="option">
                    CONTACT
                  </a>
                </div>
                <div className="social">
                  <hr />
                  <hr />
                  <a href="https://github.com/0zzycodes">
                    <div className="logo-border">
                      <img src={github} alt="Facebook Logo" />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/ibrahim-bello-928531133/">
                    <div className="logo-border">
                      <img src={linkedin} alt="Facebook Logo" />
                    </div>
                  </a>
                  <a href="https://web.facebook.com/profile.php?id=100013327810283">
                    <div className="logo-border">
                      <img src={facebook} alt="Facebook Logo" />
                    </div>
                  </a>
                  <a href="https://twitter.com/ozzycodes">
                    <div className="logo-border">
                      <img src={twitter} alt="Twitter Logo" />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/ozzycodes/">
                    <div className="logo-border">
                      <img src={instagram} alt="Instagram Logo" />
                    </div>
                  </a>
                </div>
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
