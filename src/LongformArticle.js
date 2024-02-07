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

  useEffect(() => {
    // Fetch article content
    fetch("/content/galleries/testgallery.json")
      .then((response) => response.json())
      .then((data) => {
        setGalleryHeading(data.heading);
        setGalleryCreationDate(data["creation-date"]);
        setGalleryIntro(data.introduction);
        setGalleryData(data.images);
      });
    });

  useEffect(() => {
    const handleScroll = () => {
      const articleBodies = document.querySelectorAll('.lf_article-body');
      const header = document.querySelector('.article-heading');
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
    
      // Calculate the top and bottom positions of each article section
      const articlePositions = Array.from(articleBodies).map((body) => {
        const rect = body.getBoundingClientRect();
        return {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      });
    
      // Determine the index of the article section that is mostly in view
      const currentArticleIndex = articlePositions.findIndex(
        (pos) => pos.top <= windowHeight * 0.25 + scrollPosition && pos.bottom >= windowHeight * -0.25 + scrollPosition
      );
    
    
      // Hide the header if it's off-screen
      if (header) {
        const headerRect = header.getBoundingClientRect();
        if (headerRect.bottom <= 0) {
          header.style.opacity = 0;
        } else {
          header.style.opacity = 1;
        }
      }
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <div className="gallery-item" key={index} style={{zIndex: index}}>
            <div className="gallery-image-container">
              <img className={"gallery-image gallery-image-" + index} src={item.url} alt={item.alt} style={{zIndex: index+2}} /> 
              <img className={"gallery-image-blurred"} src={item.url} alt={item.alt} style={{zIndex: index}} />
            </div>
            <div>
              <h2 className="gallery-title" style={{zIndex: index+1}}>{item.title}</h2>
              <p className="gallery-description" style={{zIndex: index+1}}>{item.description}</p>
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
