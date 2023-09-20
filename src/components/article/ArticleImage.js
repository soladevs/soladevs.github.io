import React from 'react';

const ArticleImage = ({ imageSrc, altText, caption, align, fullWidth }) => {
  const imageStyle = {
    float: align || 'none',
    width: fullWidth ? '100%' : 'auto',
  };

  return (
    <div>
      <img src={imageSrc} alt={altText} style={imageStyle} />
      {caption && <p>{caption}</p>}
    </div>
  );
};

export default ArticleImage;