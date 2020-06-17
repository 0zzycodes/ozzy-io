import React from 'react';
import './about.scss';
import download from '../../assets/download.svg';
import html5 from '../../assets/html5.svg';
import css3 from '../../assets/css3.svg';
import js from '../../assets/js.svg';
import nodejs from '../../assets/nodejs.svg';
import about from '../../assets/about.svg';
import resume from '../../assets/resume.pdf';
import CustomButton from '../../components/custom-button/custom-button';
const About = () => {
  return (
    <div className="about container" id="about">
      <div className="about-text-image">
        <div className="about-text">
          <h3 className="section-title about-title spec">
            ABOUT ME
            <span className="sort-description" />
          </h3>
          <p>
            I'm a skilled and passionate self-taught Full-Stack Developer from
            Nigeria. I have been fascinated with building web applications and
            solving problems using programming, my interest has led me to learn
            both font-end and backend technologies such as HTML5, CSS3,
            JavaScript, ReactJs and NodeJs. I have taken part in many different
            projects, some of them personal, others, team project, I believe my
            experience with those projects makes me the best candidate for web
            development related work. <br /> On my spare time, I love to play
            games, build projects and do freelance work.
          </p>

          <a href={resume} rel="noopener noreferrer" target="_blank" download>
            <CustomButton showImage="showImage">
              DOWNLOAD RESUME <img src={download} alt="Download Icon" />
            </CustomButton>
          </a>
        </div>
        <div className="about-image">
          <img src={about} alt="About-vector-illustrator" />
        </div>
      </div>
      <div className="stack">
        <div className="flex-item">
          <div>
            <h3 className="about-title">Tech Stack</h3>
            <p>Here are all the resources I've used</p>
            <div className="res">
              <h4>Frameworks & Libraries</h4>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
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
                <li>
                  {' '}
                  <img src={html5} alt="" /> HTML5
                </li>
                <li>
                  {' '}
                  <img src={css3} alt="" /> CSS3
                </li>
                <li>
                  {' '}
                  <img src={js} alt="" /> JAVASCRIPT (REACT.JS)
                </li>
              </ul>
            </div>
            <div className="back-end">
              <h3 className="about-title">Back-End</h3>
              <ul>
                <li>
                  {' '}
                  <img src={nodejs} alt="" /> JAVASCRIPT (NODE.JS / EXPRESS.JS)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
