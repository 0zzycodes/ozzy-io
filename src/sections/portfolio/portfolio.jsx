import React from 'react';
import completed from '../../assets/completed.svg';
import happy from '../../assets/happy.svg';
import codeLine from '../../assets/codeLine.svg';
import p1 from '../../assets/p1.jpg';
import './portfolio.scss';
import ProjectPreview from '../../components/project-preview/project-preview';
const Portfolio = () => {
  return (
    <div className="portfolio" id="work">
      <h2 className="section-title heading">
        PORTFOLIO
        <br />
        <span className="short-description">
          Here are some of my latest work
        </span>
      </h2>
      <div className="section-content project-list container">
        <ProjectPreview image={p1} stack={['HTML5', 'CSS3', 'JAVASCRIPT']} />
        <ProjectPreview image={p1} stack={['HTML5', 'CSS3', 'JAVASCRIPT']} />
        <ProjectPreview image={p1} stack={['HTML5', 'CSS3', 'JAVASCRIPT']} />
        <ProjectPreview image={p1} stack={['HTML5', 'CSS3', 'JAVASCRIPT']} />
      </div>
      <div className="infos">
        <div className="info-container container">
          <div className="info">
            <img src={happy} alt="Happy-Client" />
            <br />
            <span>
              3 <br /> Happy Clients
            </span>
          </div>
          <div className="info">
            <img src={codeLine} alt="Line-Of-Codes" />
            <br />
            <span>
              134209 <br /> Line of Codes
            </span>
          </div>
          <div className="info">
            <img src={completed} alt="Finished-Projects" />
            <br />
            <span>
              99 <br /> Finished Projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
