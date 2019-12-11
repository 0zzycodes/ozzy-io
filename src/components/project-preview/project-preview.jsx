import React from 'react';
import './project-preview.scss';
import focus from '../../assets/focus.svg';
const ProjectPreview = ({ image, stack }) => {
  return (
    <div className="project-preview">
      <div className="head">
        <img src={image} alt="" />
        <div className="overlay">
          <img src={focus} alt="Focus" />
        </div>
      </div>
      <div className="bott">
        <h5>Title Goes Here</h5>
        {stack.map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectPreview;
