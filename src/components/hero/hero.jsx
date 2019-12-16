import React from 'react';
import duc from '../../assets/duc.png';
import './hero.scss';
import CustomButton from '../custom-button/custom-button';
const Hero = () => {
  return (
    <div className="hero container">
      <img src={duc} alt="HeroImage" className="clipy" />
      <div className="posis">
        <div className="content">
          <h3 className="intro">
            Hi, I'm <span className="name">Ibrahim</span> <del>a.k.a</del>{' '}
            <span className="name">Ozzy</span>
          </h3>
          <p>A Self-Taught UI/UX Designer and Full-Stack Developer. </p>
          <CustomButton>SEE MY WORKS</CustomButton>
        </div>
      </div>
    </div>
  );
};
export default Hero;
