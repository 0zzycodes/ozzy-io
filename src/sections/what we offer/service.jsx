import React from 'react';
import './service.scss';
import code from '../../assets/code.svg';
import app from '../../assets/app.svg';
import design from '../../assets/design.svg';
const Service = () => {
  return (
    <div className="service" id="service">
      <h2 className="section-title heading">
        SERVICES
        <br />
        <span className="short-description">
          Below you will find a list of things I can do.{' '}
        </span>
      </h2>
      <div className="section-content container">
        <div className="box">
          <img src={design} alt="Design Logo" />
          <h4 className="title"> Design & UX</h4>
          <p>
            Interface design <strong>/</strong> Illustration <strong>/</strong>{' '}
            Graphic Design.
          </p>
        </div>
        <div className="box">
          <img src={code} alt="Design Logo" />
          <h4 className="title">Web Development</h4>
          <p>
            APIs <strong>/</strong> Mobile Responsive <strong>/</strong>{' '}
            WordPress <strong>/</strong> Javascript <strong>/</strong> React.JS{' '}
            <strong>/</strong> Node.JS & MongoDB.
          </p>
        </div>
        <div className="box">
          <img src={app} alt="Design Logo" />
          <h4 className="title">Web Apps</h4>
          <p>
            APIs <strong>/</strong> Mobile Responsive <strong>/</strong>{' '}
            React.JS <strong>/</strong> Node.JS & MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Service;
