import React from 'react';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import whatsapp from '../../assets/whatsapp.svg';
import email from '../../assets/email.svg';
import './footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>
          <b>EXCLUSEAMS</b>
        </h4>
        <p className="copyright">Excluseams @ 2019. All rights reserved.</p>
        <a href="https://facebook.com">
          <img src={facebook} alt="Facebook Logo" />
        </a>
        <a href="https://twitter.com">
          <img src={twitter} alt="Twitter Logo" />
        </a>
        <a href="https://instagram.com">
          <img src={instagram} alt="Instagram Logo" />
        </a>
        <a href="https://whatsapp.com">
          <img src={whatsapp} alt="Whatsapp Logo" />
        </a>
      </div>
      <div>
        <h4>
          <b>SUBSCRIBE</b>
        </h4>
        <form>
          <input
            type="email"
            name="email"
            className="email-input"
            placeholder="Enter email"
            required
          />
          <button className="submit-btn" type="submit">
            <img src={email} alt="Email Logo" />
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
