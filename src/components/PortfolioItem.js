import React from 'react';

const PortfolioItem = ({ title, description, image, imageAlt, projectUrl, articleUrl, date, status, tech }) => {
  return (
    <div className="PortfolioItem">
        { image && <img src={image} alt={imageAlt} /> }
        <h3 className="PortfolioItem__title">{title}</h3>
        <p className="PortfolioItem__status">{status}</p>
        <p className="PortfolioItem__description">{description}</p>
        <p className='PortfolioItem__tech'>{tech}</p>
        <p className="PortfolioItem__date">{date}</p>
        <a href={projectUrl}><div className='PortfolioItem__link-button'>External Link</div></a>
        <a href={articleUrl}><div className='PortfolioItem__link-button'>Read More</div></a>
    </div>
  );
};

export default PortfolioItem;
