import React from 'react';
import './project-preview.scss';
import focus from '../../assets/focus.svg';
import CustomButton from '../custom-button/custom-button';
const ProjectPreview = ({ image, title, stack }) => {
  return (
    <div className="project-preview">
      <div className="head">
        <img src={image} alt="" />
        <div className="overlay">
          <img src={focus} alt="Focus" />
        </div>
      </div>
      <div className="bott">
        <h3>{title}</h3>
        <div className="p-stack">
          {stack.map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="button">
          <a href="#" className="demo">
            Demo
          </a>
          <br />
          <a href="#" className="source">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
