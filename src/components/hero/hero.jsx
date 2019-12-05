import React from 'react';
import heroImage from '../../assets/heroImage.svg';
import './hero.scss';
import CustomButton from '../custom-button/custom-button';
const Hero = () => {
  return (
    <div className="hero container">
      <img className="hero-image" src={heroImage} alt="Hero Logo" />
      <div className="content">
        <h3 className="intro">
          HOWDY... <span>👋</span>
          <br />
          I'M <span>IBRAHIM</span>
          <br />A SELF-TAUGHT FRONT-END DEVELOPER
        </h3>
        <CustomButton>VIEW WORK</CustomButton>
      </div>
    </div>
  );
};
export default Hero;
