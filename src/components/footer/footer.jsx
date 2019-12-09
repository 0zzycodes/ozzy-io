import React from 'react';
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import './footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>
          <img src={logo} alt="LOGO" />
        </h4>
        <a href="https://facebook.com">
          <div className="logo-border">
            <img src={github} alt="Facebook Logo" />
          </div>
        </a>
        <a href="https://facebook.com">
          <div className="logo-border">
            <img src={linkedin} alt="Facebook Logo" />
          </div>
        </a>
        <a href="https://facebook.com">
          <div className="logo-border">
            <img src={facebook} alt="Facebook Logo" />
          </div>
        </a>
        <a href="https://twitter.com">
          <div className="logo-border">
            <img src={twitter} alt="Twitter Logo" />
          </div>
        </a>
        <a href="https://instagram.com">
          <div className="logo-border">
            <img src={instagram} alt="Instagram Logo" />
          </div>
        </a>
      </div>
      <p className="copyright">Copyright ©2019 All rights reserved | Ozzy.io</p>
    </footer>
  );
};

export default Footer;
