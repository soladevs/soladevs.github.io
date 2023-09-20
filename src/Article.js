import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioItem from './components/PortfolioItem';
import ScanlineEffect from './ScanlineEffect';
import CursorLines from './CursorLines';
import NoiseImage from './NoiseImage';

import './styles.css';
import './index.css';
import './contact.css';

const Article = () => {
    const [article, setArticle] = React.useState({});
    const [meta, setMeta] = React.useState({});

    let { articleId } = useParams();

    const articleSrc = '/content/' + articleId + '.md';
    const articleMeta = '/content/' + articleId + '_meta.json';

    fetch(articleSrc)
    .then(response => {
      return response.text()
    })
    .then(text => {
      console.log(text);
      setArticle(text);
    });

    fetch(articleMeta).then(response => {
      return response.json();
    }).then(json => {
      console.log(json);
      setMeta(json);
    })

    console.log(meta);

  return (
    <div>
      <CursorLines />
      <NoiseImage
        width={128}
        height={128}
        scale={50}
        octaves={5}
        persistence={0.5}
        lacunarity={1.0}
      />
      <Navbar />
      <div className="main">
        <HeroSection />
        <div className="article-heading">
          <img src={meta['promo-image']} alt={meta['promo-image-alt']}/>
          <div className='article-heading-wrapper'>
            <div className='article-heading-container'>
              <div className='article-text-invert' style={{'backgroundImage': `url(${meta['promo-image']})`}}>
                <h1>{meta.heading}</h1>
              </div>
            </div>
            <div className='article-meta'>
              <div className='article-text-invert' style={{'backgroundImage': `url(${meta['promo-image']})`}}>
                <div className='article-tags'>
                  <p>- sola</p>
                </div>
                <div className='article-dates'>
                  <p>{meta['creation-date']}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
      <section className="article-body">
          <div className='article-content'>
            <ReactMarkdown>{article}</ReactMarkdown>
          </div>
      </section>
      <section className="splash-section">
        <div className="splash-container"> 
          <span className='splash-questionmark flip'>?</span>
          <span className='splash-questionmark'>?</span>
        </div>
       <ScanlineEffect />
      </section>
      </div>
    </div>
  );
};

export default Article;