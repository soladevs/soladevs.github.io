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
  const [article, setArticle] = useState('');
  const [meta, setMeta] = useState({});
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  let { articleId } = useParams();

  const articleSrc = '/content/' + articleId + '.md';
  const articleMeta = '/content/' + articleId + '_meta.json';

  useEffect(() => {
    // Fetch article content
    fetch(articleSrc)
      .then((response) => response.text())
      .then((text) => {
        setArticle(text);
      });

    // Fetch article metadata
    fetch(articleMeta)
      .then((response) => response.json())
      .then((json) => {
        setMeta(json);
      });

    // Fetch background images
    Promise.all([
      './content/article-images/2019-protest/1.jpg',
      './content/article-images/2019-protest/2.jpg',
      './content/article-images/2019-protest/3.jpg',
      './content/article-images/2019-protest/4.jpg',
    ]).then((images) => {
      setBackgroundImages(images);
    });
  }, [articleId]);

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
        (pos) => pos.top <= windowHeight * 0.25 + scrollPosition && pos.bottom >= windowHeight * 0.25 + scrollPosition
      );
    
      // Set the current background index based on the article index
      if (currentArticleIndex !== -1) setCurrentBackgroundIndex(currentArticleIndex);
    
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
          {backgroundImages.map((image, index) => (
            <div
              key={`background-${index}`}
              className={`background-image ${index === currentBackgroundIndex ? 'visible' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          {[...Array(4)].map((_, index) => (
            <div key={`article-content-${index}`} className="lf_article-body">
              <ReactMarkdown>{article}</ReactMarkdown>
            </div>
          ))}
        </div>
         
      </div>
    </div>
  );
};
  
export default LongformArticle;
