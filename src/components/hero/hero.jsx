import React from 'react';
import { Link } from 'react-scroll';
import hello from '../../assets/hello.svg';
import './hero.scss';
import CustomButton from '../custom-button/custom-button';
const Hero = () => {
  return (
    <div className="hero container">
      <div className="posis">
        <div className="content">
          <div className="hero-image">
            <img src={hello} alt="HeroImage" id="target" className="hello" />
          </div>
          <h3 className="intro">
            Hi, I'm <span className="name">Ibrahim</span> <del>a.k.a</del>
            <span className="name"> Ozzy</span>
          </h3>
          <p>A Self-Taught Full-Stack Developer. </p>

          <Link to="work" spy={true} smooth={true} duration={500}>
            <CustomButton>SEE MY WORKS</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
