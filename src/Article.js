import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioItem from './components/PortfolioItem';

import './styles.scss';
import './index.scss';
import './article.scss';

const Article = () => {
    const [article, setArticle] = React.useState({});
    const [meta, setMeta] = React.useState({});

    let { articleId } = useParams();

    const articleSrc = '/content/' + articleId + '.md';
    const articleMeta = '/content/' + articleId + '_meta.json';

    useEffect(() => {
      fetch(articleSrc)
        .then(response => response.text())
        .then(text => {
          setArticle(text);
        });
    
      fetch(articleMeta)
        .then(response => response.json())
        .then(json => {
          setMeta(json);
        });
    }, []);

    console.log(meta);

  return (
    <div>
      <Navbar openInitialState={false} />
      <div className="main article">
        <HeroSection />
        <div className="article-heading">
          <img style={{backgroundImage: `url(${meta['promo-image']})`}}></img>
          <div className='article-heading-wrapper'>
            <div className='article-heading-container'>
              <div className='article-text-invert' style={{'backgroundImage': `url(${meta['promo-image']})`}}>
                <h1>{meta.heading}</h1>
                <div className='article-meta'>
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
            </div>
      <section className="article-body">
          <div className='article-content'>
            <ReactMarkdown>{article}</ReactMarkdown>
          </div>
      </section>
      <Footer />
      </div>
    </div>
  );
};

export default Article;