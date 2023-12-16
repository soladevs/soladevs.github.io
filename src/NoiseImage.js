import React, { useState, useEffect, useRef } from 'react';
import { createNoise2D } from 'simplex-noise';

function NoiseImage({ width, height, scale, octaves, persistence, lacunarity }) {
  const imageContainerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const generateNoiseImage = () => {
      const noise2D = new createNoise2D();

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const xCoord = x / scale;
          const yCoord = y / scale;

          let value = 0;
          let amplitude = 1;
          let frequency = 1;

          for (let i = 0; i < octaves; i++) {
            const noiseValue = noise2D(xCoord, yCoord);

            value += noiseValue * amplitude;
            amplitude *= persistence;
            frequency *= lacunarity;
          }

          const normalizedValue = Math.floor((value + 1) / 2 * 255);
          context.fillStyle = `rgb(${normalizedValue},${normalizedValue},${normalizedValue})`;
          context.fillRect(x, y, 1, 1);
        }
      }

      const imageUrl = canvas.toDataURL();
      setImageUrls(imageUrls => [...imageUrls, imageUrl]);
    };

    const numberOfImages = 5;
    // Generate initial noise images
    for (let i = 0; i <= numberOfImages; i++) {
      generateNoiseImage();
    }

    const imageRotationInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex >= numberOfImages ? 0 : prevIndex + 1);
    }, 250);

    // Clean up the timer when unmounting
    return () => clearInterval(imageRotationInterval);
  }, [width, height, scale, octaves, persistence, lacunarity]);

  useEffect(() => {
    if (imageUrls.length >= 2) {
      imageContainerRef.current.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;
    }
  }, [currentImageIndex, imageUrls]);

  return (
    <div
      className='noise-image'
      ref={imageContainerRef}
      style={{
        width: `100vw`,
        height: `100vh`,
        backgroundRepeat: 'repeat',
        backgroundSize: `${width}px ${height}px`,
        border: '1px solid black',
        zIndex: '11'
      }}
    />
  );
}

export default NoiseImage;
