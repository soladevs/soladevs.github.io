import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScanlineEffect from './ScanlineEffect';
import CursorLines from './CursorLines';
import NoiseImage from './NoiseImage';

import './index.scss';
import './styles.scss';

const PageTemplate = () => {
  return (
    <div>
      <CursorLines />
      <NoiseImage
        width={128}
        height={128}
        scale={1}
        octaves={5}
        persistence={0.5}
        lacunarity={1.0}
      />
      <Navbar />
      <div className="main">
        <HeroSection />
        <main>
        <h1 className='page-title'>page title </h1>
        </main>
        <section className="splash-section">
          <div className="splash-container">
            <span className="splash-questionmark flip">?</span>
            <span className="splash-questionmark">?</span>
          </div>
          <ScanlineEffect />
        </section>
      </div>
    </div>
  );
};

export default PageTemplate;
