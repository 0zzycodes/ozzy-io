import React from 'react';
import { Consumer } from '../../context';
import './portfolio-nav.scss';
export const PortfolioNav = () => {
  const handleFilter = (e, dispatch) => {
    dispatch({ type: 'FILTER_LIST', payload: e });
  };
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div className="portfolio-nav">
            <span
              className="link active"
              onClick={handleFilter.bind(this, 'all', dispatch)}
            >
              All
            </span>
            <span
              className="link"
              onClick={handleFilter.bind(this, 'frontend', dispatch)}
            >
              Front-End
            </span>
            <span
              className="link"
              onClick={handleFilter.bind(this, 'backend', dispatch)}
            >
              Back-End
            </span>
            <span
              className="link"
              onClick={handleFilter.bind(this, 'challenge', dispatch)}
            >
              Font Loop Challenge
            </span>
            <span
              className="link"
              onClick={handleFilter.bind(this, 'algorithm', dispatch)}
            >
              Algorithms
            </span>
            <span
              className="link"
              onClick={handleFilter.bind(this, 'boilerplate', dispatch)}
            >
              Boilerplates
            </span>
          </div>
        );
      }}
    </Consumer>
  );
};
