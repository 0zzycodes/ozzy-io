import React, { useState } from 'react';
import { Consumer } from '../../context';
import './portfolio-nav.scss';
export const PortfolioNav = () => {
  const [state, setState] = useState({ active: 'all' });
  const handleFilter = (e, dispatch) => {
    setState({ active: e });
    dispatch({ type: 'FILTER_LIST', payload: e });
  };
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div className="portfolio-nav">
            <span
              className={`${state.active === 'all' && 'active'} link`}
              onClick={handleFilter.bind(this, 'all', dispatch)}
            >
              All
            </span>
            <span
              className={`${state.active === 'frontend' && 'active'} link`}
              onClick={handleFilter.bind(this, 'frontend', dispatch)}
            >
              Front-End
            </span>
            <span
              className={`${state.active === 'full-stack' && 'active'} link`}
              onClick={handleFilter.bind(this, 'full-stack', dispatch)}
            >
              Full Stack
            </span>
            {/* <span
              className={`${state.active === "challenge" && "active"} link`}
              onClick={handleFilter.bind(this, "challenge", dispatch)}
            >
              Font Loop Challenge
            </span> */}
            <span
              className={`${
                state.active === 'algorithm' && 'active'
              } link disabled`}
            >
              Algorithms
            </span>
            <span
              className={`${state.active === 'boilerplate' && 'active'} link`}
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
