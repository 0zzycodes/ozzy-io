import React from 'react';
import logo2 from '../../assets/logo2.png';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import './footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>
          <img src={logo2} alt="LOGO" />
        </h4>
        <br />
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
      <br />
      <p className="copyright">
        {new Date().getFullYear()} &copy;{' '}
        <a href="https://ozzy-dev.netlify.com">Ozzycodes</a>{' '}
      </p>
    </footer>
  );
};

export default Footer;
