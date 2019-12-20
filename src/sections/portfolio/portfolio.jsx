import React from 'react';
import completed from '../../assets/completed.svg';
import happy from '../../assets/happy.svg';
import codeLine from '../../assets/codeLine.svg';
import portfolio from '../../assets/portfolio.png';
import todo from '../../assets/todo.png';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
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
        <ProjectPreview
          image={portfolio}
          title="My Portfolio"
          stack={['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT']}
          demo="https://ozzy-dev.netlify.com"
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
        />
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
            <img src={completed} alt="Finished-Projects" />
            <br />
            <span>
              145 <br /> Finished Projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
