import React, { useState } from 'react';
import { createNoise2D } from 'simplex-noise';

function NoiseGenerator() {
  const [width] = useState(1920);
  const [height] = useState(1080);
  const [scale, setScale] = useState(100);
  const [octaves, setOctaves] = useState(5);
  const [persistence, setPersistence] = useState(0.5);
  const [lacunarity, setLacunarity] = useState(2.0);
  const [imageData, setImageData] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayCanvas, setOverlayCanvas] = useState(null);

  const noise2D = createNoise2D(); // Initialize the noise function

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const generateAndShowOverlay = () => {
    // Create an overlay canvas element
    const overlayCanvasElement = document.createElement('canvas');
    overlayCanvasElement.width = width;
    overlayCanvasElement.height = height;
    const overlayContext = overlayCanvasElement.getContext('2d');
    overlayContext.putImageData(imageData, 0, 0, null, null, 1920, 1080);
  
    setOverlayCanvas(overlayCanvasElement);
    setOverlayVisible(true);
  };
  

  const generateNoiseImage = () => {
    const newImageData = new ImageData(width, height);
    const data = newImageData.data;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let value = 0;
        let amplitude = 1;
        let frequency = 1;

        for (let i = 0; i < octaves; i++) {
          const xCoord = x / scale * frequency;
          const yCoord = y / scale * frequency;
          const noiseValue = noise2D(xCoord, yCoord); // Use noise2D

          value += noiseValue * amplitude;
          amplitude *= persistence;
          frequency *= lacunarity;
        }

        const normalizedValue = (value + 1) / 2 * 255;
        const index = (x + y * width) * 4;
        data[index] = normalizedValue;
        data[index + 1] = normalizedValue;
        data[index + 2] = normalizedValue;
        data[index + 3] = 255;
      }
    }

    setImageData(newImageData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'scale':
        setScale(parseFloat(value));
        break;
      case 'octaves':
        setOctaves(parseFloat(value));
        break;
      case 'persistence':
        setPersistence(parseFloat(value));
        break;
      case 'lacunarity':
        setLacunarity(parseFloat(value));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Noise Generator</h1>
      <button onClick={generateNoiseImage}>Generate</button>
      <button onClick={generateAndShowOverlay}>Generate and Show Overlay</button>
      <div>
        <label>Scale:</label>
        <input
          type="number"
          name="scale"
          value={scale}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Octaves:</label>
        <input
          type="number"
          name="octaves"
          value={octaves}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Persistence:</label>
        <input
          type="number"
          name="persistence"
          value={persistence}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Lacunarity:</label>
        <input
          type="number"
          name="lacunarity"
          value={lacunarity}
          onChange={handleInputChange}
        />
      </div>
      {imageData && (
        <div>
          <h2>Generated Image</h2>
          <canvas
            width={width}
            height={height}
            style={{ border: '1px solid black' }}
            ref={(canvas) => {
              if (canvas) {
                const context = canvas.getContext('2d');
                context.putImageData(imageData, 0, 0);
              }
            }}
          />
        </div>
      )}


      {overlayVisible && (
        <div className="overlay" onClick={toggleOverlay}>
          <canvas
            ref={(canvas) => {
              if (canvas && overlayCanvas) {
                const context = canvas.getContext('2d');
                context.drawImage(overlayCanvas, 0, 0);
              }
            }}
            className="overlay-canvas"
          />
        </div>
      )}
    </div>
  );
}

export default NoiseGenerator;
