import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import './styles.scss';
import './index.scss';
import './article.scss';

const LongformArticle = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [galleryIntro, setGalleryIntro] = useState([]);
  const [galleryHeading, setGalleryHeading] = useState([]);
  const [galleryCreationDate, setGalleryCreationDate] = useState([]);

  const { articleId } = useParams();

  useEffect(() => {
    // Fetch article content
    fetch("/content/galleries/"+ articleId + ".json")
      .then((response) => response.json())
      .then((data) => {
        setGalleryHeading(data.heading);
        setGalleryCreationDate(data["creation-date"]);
        setGalleryIntro(data.introduction);
        setGalleryData(data.images);
      });
    });

  return (
    <div>
      <Navbar openInitialState={false} />
      <div className="main article">
        <HeroSection />
        <div className="lf_article-container">
          <h1 className="gallery-heading">{galleryHeading}</h1>
          <p className="gallery-intro">{galleryIntro}</p>
          <p className="gallery-creation-date">{galleryCreationDate}</p>
          {galleryData.map((item, index) => (
          <div className="gallery-item" key={index} style={{zIndex: index, opacity: 0.99}}>
            <div className="gallery-image-container">
              <img className={"gallery-image gallery-image-" + index} src={item.url} alt={item.alt} style={{zIndex: index+2, opacity: 0.99}} /> 
              <img className={"gallery-image-blurred"} src={item.url} alt={item.alt} style={{zIndex: index+1, opacity: 0.99}} />
            </div>
            <div>
              <h2 className="gallery-title" style={{zIndex: index+2}}>{item.title}</h2>
              <p className="gallery-description" style={{zIndex: index+2}}>{item.description}</p>
            </div>
          </div>
        ))}
        <button className="lf-button_return" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'  })}>Return to top</button>
        </div>
      </div>
    </div>
  );
};
  
export default LongformArticle;
