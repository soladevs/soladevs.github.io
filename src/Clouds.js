//Component to create clouds with various blur levels that move across the screen

import React, { useEffect } from 'react';

import './styles.scss';

function createClouds() {
    const clouds = document.querySelectorAll('.cloud'); // Assuming the clouds have a class name of 'cloud'
    
    //do nothing if there are 20 clouds or more
    if (clouds.length > 20) 
        return
    
    const fgCloudContainer = document.getElementById('fg-cloud-container'); // Assuming there's a container element for the clouds
    const bgCloudContainer = document.getElementById('bg-cloud-container'); // Assuming there's a container element for the clouds
    
    const cloud = document.createElement('img');
    cloud.src = Math.random() > 0.5 ? './cloud.svg' : './cloud2.svg';
    cloud.className = 'cloud';
    cloud.style.top = `${Math.random() * 65 - 20}vh`;
    cloud.style.left = `110vw`;
    cloud.style.transform = `scale(${Math.random() * 0.7 + 0.1})`; // Random scale
    cloud.style.position = 'absolute'; // Set the position to absolute to allow clouds to overlap
    cloud.style.display = 'inline';
    const zindex = parseInt(Math.random() * 3 + 1);
    cloud.style.zIndex = zindex;

    const blur  = Math.random() * 75 + 25;
    
    if(zindex > 2) {
        cloud.style.filter = `blur(${blur}px)`;

        fgCloudContainer.appendChild(cloud);

    } else {
        cloud.style.filter = `blur(${blur*3}px)`;
        bgCloudContainer.appendChild(cloud);
    }
  }

  function moveClouds() {
    const clouds = document.querySelectorAll('.cloud'); // Assuming the clouds have a class name of 'cloud'
  
    clouds.forEach((cloud) => {
      const cloudRect = cloud.getBoundingClientRect(); // Get the bounding rectangle of the cloud
      const isOffLeftBounds = cloudRect.right < 0; // Check if the right side of the cloud is off the left bounds of the screen
  
      if (isOffLeftBounds) {
        cloud.remove(); // Remove the cloud from the DOM
      } else {
        const duration = Math.random() * 20 + 20; // Random duration for the animation (between 10 and 30 seconds)
  
        cloud.style.transition = `transform ${duration}s linear`; // Set the transition duration for smooth movement
        cloud.style.transform = `translateX(-600%)`; // Move the cloud to the left edge of the screen
  
        setTimeout(() => {
          cloud.remove(); // Remove the cloud from the DOM after the animation duration
        }, duration * 15000); // Convert duration to milliseconds
      }
    });
  }

  const Clouds = () => {
    useEffect(() => {
      const cloudCreationInterval = setInterval(createClouds, 150); 
      return () => clearInterval(cloudCreationInterval); // Clear the interval on component unmount
    }, []);

    useEffect(() => {
      const moveCloudsInterval = setInterval(moveClouds, 1200); 
      return () => clearInterval(moveCloudsInterval); // Clear the interval on component unmount
    }, []);

    return (
    <div>
        <div id="fg-cloud-container"></div>
        <div id="bg-cloud-container"></div>
    </div>
    );
  }

  export default Clouds;