import React from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioItem from './components/PortfolioItem';
import ScanlineEffect from './ScanlineEffect';
import CursorLines from './CursorLines';
import NoiseImage from './NoiseImage';

import './index.scss';
import './styles.scss';
import articles from './content/articles.json';
import PromoCard from './components/promo-card/PromoCard';

const WritingPage = () => {
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
      <section className="articles-section">
        <div className='articles-container-container'>
        <h1 className='articles-section__title'>writing //</h1>
        <div className="articles-container">
          {articles.map((article) => {
              console.log(article)
              return <PromoCard 
                headline={article.heading}
                summary={article.subheading}
                destinationUrl={"/#writing/" + article['url-slug']}
                imageSrc={article['promo-image']}
                date={article['creation-date']}
              />
            })}
        </div>
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

export default WritingPage;