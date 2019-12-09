import React from 'react';
import completed from '../../assets/completed.svg';
import happy from '../../assets/happy.svg';
import codeLine from '../../assets/codeLine.svg';
import './portfolio.scss';
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
      <div className="section-content container">
        <div className="box">
          <h4 className="title">Portfolio</h4>
          <p>each project goes here</p>
        </div>
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
