import React from 'react';
import './skill.scss';
const Skill = ({ skillName }) => {
  return (
    <div className="skill">
      <span className="skill-name">{skillName}</span>
      <input
        type="range"
        min="1"
        max="100"
        value="0"
        className="slider"
        onChange={() => null}
      />
    </div>
  );
};
export default Skill;
