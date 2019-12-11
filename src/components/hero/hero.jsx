import React from 'react';
import logo from '../../assets/logo.svg';
import './hero.scss';
import CustomButton from '../custom-button/custom-button';
const Hero = () => {
  return (
    <div className="hero container">
      <img src={logo} alt="HeroImage" className="clipy" />
      <div className="posis">
        <div className="content">
          <h3 className="intro">
            HOWDY...
            <span role="img" aria-label="Wave">
              👋
            </span>
            <br />
            I'M <span className="name">IBRAHIM</span> a.k.a{' '}
            <span className="name">OZZY</span>
          </h3>
          <p>
            A Self-Taught UI/UX Designer and Front-End Developer <br /> from the
            Second Largest City in Africa Ibadan, Nigeria
          </p>
          <CustomButton>SEE MY WORKS</CustomButton>
        </div>
      </div>
    </div>
  );
};
export default Hero;
