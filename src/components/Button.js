import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button className="cta-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
