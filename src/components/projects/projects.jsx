import React from 'react';
import { Consumer } from '../../context';
import ProjectPreview from '../../components/project-preview/project-preview';
import loader from '../../assets/loader.gif';
import { PortfolioNav } from '../portfolio-nav/portfolio-nav';

const Projects = () => {
  return (
    <Consumer>
      {(value) => {
        const { projects, dispatch } = value;
        return (
          <div className="group">
            <PortfolioNav />
            <div className="section-content project-list container">
              {projects.length === 0 ? (
                <div className="loader">
                  <img src={loader} alt="Loader" />
                </div>
              ) : (
                projects.map((item, index) => (
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

export default Projects;
