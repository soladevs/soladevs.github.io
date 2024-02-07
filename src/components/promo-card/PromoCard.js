import React from 'react';
import './promo-card.scss';


const PromoCard = ({ imageSrc, headline, summary, destinationUrl, date }) => {
  const baseClassName = 'promo-card';
  return (
    <div className={baseClassName}>
      <a className={baseClassName + '_container'} href={destinationUrl}>
          <img className={baseClassName + '_image'} src={imageSrc} alt={headline} />
          <div className={baseClassName + '_content'}>
            <h3 className={baseClassName + '_headline'}>{headline}</h3>
            <p className={baseClassName + '_summary'}>{summary}</p>
            <p className={baseClassName + '_date'}>{date}</p>
            <p className={baseClassName + '_read-more'}>{"read >"}</p>
          </div>
      </a>
    </div>
  );
};

export default PromoCard;
