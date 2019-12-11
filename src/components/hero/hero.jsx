import React from 'react';
import heroImage from '../../assets/heroImage.png';
import './hero.scss';
import CustomButton from '../custom-button/custom-button';
const Hero = () => {
  return (
    <div className="hero container">
      <img src={heroImage} alt="HeroImage" className="clipy" />
      <div className="posis">
        <div className="content">
          <h3 className="intro">
            HOWDY...👋
            <br />
            I'M <span className="name">IBRAHIM</span> a.k.a{' '}
            <span className="name">OZZY</span>
          </h3>
          <p>
            A Self-Taught UI/UX Designer and Front-End Developer from the Second
            Largest City in Africa Ibadan, Nigeria
          </p>
          <CustomButton>SEE MY WORKS</CustomButton>
        </div>
      </div>
    </div>
  );
};
export default Hero;
