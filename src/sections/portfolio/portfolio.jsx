import React from 'react';
import { Consumer } from '../../context';
import tick from '../../assets/tick.svg';
import happy from '../../assets/happy.svg';
import codeLine from '../../assets/codeLine.svg';
import loader from '../../assets/loader.gif';
import ProjectPreview from '../../components/project-preview/project-preview';
import './portfolio.scss';
const Portfolio = () => {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
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
              {projects.length === 0 ? (
                <div className="loader">
                  <img src={loader} alt="Loader" />
                </div>
              ) : (
                projects.map((item, index) => (
                  <ProjectPreview key={index} data={item} />
                ))
              )}
              {/* <ProjectPreview
                image={portfolio}
                title="My Portfolio"
                stack={['REACT']}
                demo="https://ozzy-dev.netlify.com"
                source=""
              />
              <ProjectPreview
                image={p6}
                title="Ozzy Weather App"
                stack={['HTML5', 'CSS3', 'JAVASCRIPT']}
                demo="https://ozzy-weather-app-v2.netlify.com"
                source=""
              />
              <ProjectPreview
                image={p7}
                title="Onling Foods"
                stack={['HTML5', 'CSS3', 'JAVASCRIPT']}
                demo="https://onling-food.netlify.com"
                source=""
              />
              <ProjectPreview
                image={p4}
                title="Ozzy Tour"
                stack={['HTML5', 'CSS3', 'JAVASCRIPT']}
                demo="https://ozzy-tour.netlify.com"
                source=""
              />
              <ProjectPreview
                image={p3}
                title="Home Deco"
                stack={['HTML5', 'CSS3', 'JAVASCRIPT']}
                demo="https://ozzy-home-deco.netlify.com"
                source=""
              />
              <ProjectPreview
                image={p5}
                title="Channel Landing Clone"
                stack={['HTML5', 'CSS3', 'JAVASCRIPT']}
                demo="https://ozzy-home-deco.netlify.com"
                source=""
              />
              <ProjectPreview
                image={p2}
                title="Perfect Spice"
                stack={['HTML5', 'CSS3', 'JAVASCRIPT']}
                demo="https://ozzy-perfect-spice.netlify.com"
                source=""
              />
              <ProjectPreview
                image={todo}
                title="Task Manger"
                stack={['REACT', 'CONTEXT API']}
                demo="https://0zzycodes.github.io/reacttodoapp"
                source=""
              />
              <ProjectPreview
                image={p1}
                title="Ozzy Store"
                stack={['HTML5', 'CSS3', 'JAVASCRIPT']}
                demo="https://ozzy-shop.netlify.com"
                source=""
              /> */}
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
                    134,209 <br /> Line of Codes
                  </span>
                </div>
                <div className="info">
                  <img src={tick} alt="Finished-Projects" />
                  <br />
                  <span>
                    145 <br /> Finished Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};
export default Portfolio;
