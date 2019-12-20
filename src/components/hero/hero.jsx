import React from 'react';
import { Link } from 'react-scroll';
import duc from '../../assets/duc.png';
import './hero.scss';
import CustomButton from '../custom-button/custom-button';
const Hero = () => {
  return (
    <div className="hero container">
      <img src={duc} alt="HeroImage" id="target" className="clipy" />
      <div className="posis">
        <div className="content">
          <h3 className="intro">
            Hi, I'm <span className="name">Ibrahim</span> <del>a.k.a</del>
            <span className="name">Ozzy</span>
          </h3>
          <p>A Self-Taught UI/UX Designer and Full-Stack Developer. </p>

          <Link to="work" spy={true} smooth={true} duration={500}>
            <CustomButton>SEE MY WORKS</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
