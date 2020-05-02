import React from 'react';
import './project-preview.scss';
const ProjectPreview = ({ data }) => {
  const { image, title, stack, demo, description } = data;
  return (
    <div className="project-preview">
      <div className="head">
        <img src={image} alt="" />
      </div>
      <div className="bott">
        <div>
          <h3 className="project-title">{title}</h3>
          <p>
            {description
              ? description
              : `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            eum omnis quibusdam, temporibus deserunt ullam provident mollitia
            maiores repudiandae commodi? Velit tempora minus laboriosam.
            Reprehenderit ab, fuga optio repellat culpa architecto consequatur
            repudiandae reiciendis dignissimos sint! Sed ipsa labore, doloribus
            deleniti incidunt inventore et nobis ducimus iusto asperiores a
            sunt?`}
          </p>
        </div>
        <div className="button">
          <div className="p-stack">
            {stack
              ? stack
                  .split(',')
                  .map((item, index) => <span key={index}>{item}</span>)
              : ''}
          </div>
          <a href={demo} className="demo">
            Demo
          </a>
          <a href={data.code ? data.code : '/'} className="source">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
