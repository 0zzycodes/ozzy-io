import React from 'react';
import { Consumer } from '../../context';
import loader from '../../assets/loader.gif';
import ProjectPreview from '../../components/project-preview/project-preview';
import './portfolio.scss';
import { PortfolioNav } from '../../components/portfolio-nav/portfolio-nav';
const Portfolio = () => {
  return (
    <Consumer>
      {(value) => {
        const { filteredList } = value;
        return (
          <div className="portfolio" id="work">
            <h2 className="section-title heading">
              PORTFOLIO
              <br />
              <span className="short-description">
                Here are some of my latest work
              </span>
            </h2>
            <PortfolioNav />
            <div className="section-content project-list container">
              {filteredList.length === 0 ? (
                <div className="loader">
                  <img src={loader} alt="Loader" />
                </div>
              ) : (
                filteredList.map((item, index) => (
                  <ProjectPreview key={index} data={item} />
                ))
              )}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};
export default Portfolio;
