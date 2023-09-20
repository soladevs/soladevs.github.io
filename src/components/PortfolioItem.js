import React from 'react';

const PortfolioItem = ({ title, description, image, url, date, status, tech }) => {
  return (
    <div className="PortfolioItem">
      <a href={url}>
        <img src={image} alt={title} />
        <h3 className="PortfolioItem__title">{title}</h3>
        <p className="PortfolioItem__description">{description}</p>
        <p className='PortfolioItem__tech'>{tech}</p>
        <p className="PortfolioItem__date">{date}</p>
        <p className="PortfolioItem__status">{status}</p>
      </a>
    </div>
  );
};

export default PortfolioItem;
