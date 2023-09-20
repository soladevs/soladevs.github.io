import React from 'react';

const Testimonial = ({ quote, author }) => {
  return (
    <div className="Testimonial">
      <blockquote>{quote}</blockquote>
      <cite>{author}</cite>
    </div>
  );
};

export default Testimonial;
