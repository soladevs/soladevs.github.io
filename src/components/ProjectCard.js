import React from 'react';

const ProjectCard = ({ title, description, image, tags }) => {
  return (
    <div className="ProjectCard">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
