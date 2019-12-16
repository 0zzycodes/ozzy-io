import React from 'react';
import './about.scss';
import download from '../../assets/download.svg';
import single from '../../assets/single.png';
import CustomButton from '../../components/custom-button/custom-button';
const About = () => {
  return (
    <div className="about container" id="about">
      <div className="about-text-image">
        <div className="about-text">
          <h3 className="section-title about-title">
            ABOUT ME
            <span className="sort-description"></span>
          </h3>
          <p>
            I am an experienced self-taught web developer from Nigeria. I have
            been fascinated with building a web application and solving problems
            using programming, my interest has led me to learn web technologies
            such as HTML5, CSS3, JavaScript and a framework called ReactJs. I
            have taken part in many different projects, some of them personal,
            others, team project, I believe my experience with those projects
            makes me the best candidate for web development related work
          </p>
          <CustomButton showImage="showImage">
            DOWNLOAD RESUME <img src={download} alt="Download Icon" />
          </CustomButton>
        </div>
        <div className="about-image">
          <img src={single} alt="About-vector-illustrator" />
        </div>
      </div>
      <div className="stack">
        <div className="flex-item">
          <div>
            <h3 className="about-title">Tech Stack</h3>
            <p>Here are all the resources I used</p>
            <div className="res">
              <h4>Frameworks & Libraries</h4>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="res">
              <h4>Deployment & Hosting</h4>
              <ul>
                <li>Github Pages</li>
                <li>Netlify</li>
                <li>Heroku</li>
              </ul>
            </div>
            <div className="res">
              <h4>Web Performance & Security</h4>
              <ul>
                <li>Lighthouse Chrome DevTools</li>
                <li>Google Analytics</li>
              </ul>
            </div>
          </div>
          <div className="analysed-stack">
            <div className="front-end">
              <h3 className="about-title">Front-End</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JAVASCRIPT (REACT.JS)</li>
              </ul>
            </div>
            <div className="back-end">
              <h3 className="about-title">Back-End</h3>
              <ul>
                <li>JAVASCRIPT (NODE.JS)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
