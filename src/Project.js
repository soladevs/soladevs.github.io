import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScanlineEffect from './ScanlineEffect';
import CursorLines from './CursorLines';
import NoiseImage from './NoiseImage';

import './index.scss';
import './styles.scss';
import './project.scss';
import { useParams } from 'react-router';

const Project = () => {
  let { projectId } = useParams();
  const projectJson = '/content/projects/' + projectId + '.json';
  const [project, setProject] = React.useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  React.useEffect(() => {
    fetch(projectJson)
      .then(response => response.json())
      .then(json => {
        setProject(json);
      });
  }, [projectJson]);

  const [sectionExpanded, setSectionExpanded] = useState([]);
  
  if (!project.images) {
    return <div></div>
  }

  const toggleSection = (index) => {
    setSectionExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const images = project.images || [];
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => {
      const lastIndex = images.length - 1;
      const newIndex = prevIndex === 0 ? lastIndex : prevIndex - 1;
      console.log('New Prev Index:', newIndex);
      return newIndex;
    });
  };
  
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => {
      const lastIndex = images.length - 1;
      const newIndex = prevIndex === lastIndex ? 0 : prevIndex + 1;
      console.log('New Next Index:', newIndex);
      return newIndex;
    });
  };

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
        <main>
          <div className="project-title_container">
            <h1 className='page-title'>{project.title}</h1>
          </div>
          <div className="project-link_container">
          {project.mainButtons.map((button, index) => (
            <a
              key={index}
              href={button.url}
              target="_blank" // Open links in a new tab/window
              rel="noopener noreferrer"
              className="project-link_button"
            >
              {button.label === "View"}
              {button.label === "Source"}
              <span>{button.label}</span>
            </a>
          ))}
          </div>
          <div className="project-description_container">
            <div className="project-description">
              <p>{project.tagline}</p>
            </div>
          </div>
          <div className='project-content_container'>
          <div className="project-image_container">
            <div className="project-image">
              <img className="project-main_image" src={images[currentImageIndex].url} alt={images[currentImageIndex].alt} />
              <div className="project-image_controls">
                <span onClick={handlePrevClick}>Prev</span>
                <div className="project-image_controls_previews">
                  {Object.keys(images).map((key) => (
                    <img
                      key={key}
                      src={images[key].url}
                      alt={images[key].alt}
                      className={
                        Number(key) === currentImageIndex
                          ? 'active-preview'
                          : 'inactive-preview'
                      }
                      onClick={() => setCurrentImageIndex(Number(key))}
                    />
                  ))}
                </div>
                <span onClick={handleNextClick}>Next</span>
              </div>
            </div>
          </div>
          <div className="project-features_section">
            <div className="project-features_container">
                <h2 className="project-features__title">Features</h2>
                <p>{project.description}</p>
                {project.mainPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
            </div>
          </div>
          <hr />
          <div className='project-sections'>
            {project.sections.map((section, index) => (
              <div className="project-section" key={index}>
                <h2 className="project-section__title">{section.heading}</h2>
                <button
                  onClick={() => toggleSection(index)}
                  className="project-section__toggle"
                >
                  {sectionExpanded[index] ? 'Collapse' : 'Expand'}
                </button>
                <div
                  className="project-section__contents"
                  style={{ marginBottom: 16, display: sectionExpanded[index] ? 'block' : 'none' }}
                >
                  <p>{section.contents}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default Project;
