import React from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioItem from './components/PortfolioItem';
import ScanlineEffect from './ScanlineEffect';
import CursorLines from './CursorLines';
import NoiseImage from './NoiseImage';

import './index.css';
import './styles.css';
import projects from './content/projects.json';

const ProjectPage = () => {
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
      <section className="projects-section">
        <h2 className='projects-section__title active'>active projects //</h2>
        <div className="projects-container">
          {projects.map((project) => {
              console.log(project)
              return <PortfolioItem 
                title={project.heading}
                description={project.subheading}
                image={project['promo-image']}
                tech={project.tech}
                date={project.creationDate}
                url={project['project-url']}
                status={project.availability}
              />
            })}
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

export default ProjectPage;