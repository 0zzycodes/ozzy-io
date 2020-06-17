import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo2 from '../../assets/logo2.png';
import menu from '../../assets/menu.svg';
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
  const handleScroll = (e) => {
    setisShow(!isShow);
  };
  const toggleMenu = () => {
    setisShow(!isShow);
  };
  return (
    <header className="header">
      <nav className="navbar fancy">
        <div className="nav-links container">
          <div className="show">
            <div className="brand">
              <a href="/">
                <img src={logo2} alt="LOGO" className="logo-icon" />
              </a>
            </div>

            <img
              src={isShow ? close : menu}
              className="menu-button"
              alt="MenuIcon"
              onClick={toggleMenu}
            />
          </div>
          <div className="options">
            {isShow ? (
              <div className="links">
                <div className="nav-links-2">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleScroll}
                    className="option"
                  >
                    ABOUT
                  </Link>
                  <br />
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleScroll}
                    className="option"
                  >
                    PORTFOLIO
                  </Link>
                  <br />
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={handleScroll}
                    className="option"
                  >
                    CONTACT
                  </Link>
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
