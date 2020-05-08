import React from 'react';
import './portfolio-nav.scss';
export const PortfolioNav = () => {
  return (
    <div className="portfolio-nav">
      <span className="link active" onClick={''}>
        All
      </span>
      <span className="link" onClick={''}>
        Front-End
      </span>
      <span className="link" onClick={''}>
        Back-End
      </span>
      <span className="link" onClick={''}>
        Font Loop Challenge
      </span>
      <span className="link" onClick={''}>
        Algorithms
      </span>
      <span className="link" onClick={''}>
        Boilerplates
      </span>
    </div>
  );
};
