import React, { useState } from 'react';

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(50);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const seekTime = parseFloat(event.target.value);
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value);
    setVolume(newVolume);
  };

  const calculateBackgroundColor = () => {
    const hue = Math.floor((currentTime / 100) * 360);
    return `hsl(${hue}, 50%, 50%)`;
  };

  return (
    <div className="media-player">
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <input
        type="range"
        min={0}
        max={100}
        step={0.1}
        value={currentTime}
        onChange={handleSeek}
      />
      <div className="volume-controls">
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={handleVolumeChange}
        />
        <img
          src={`volume-${volume >= 50 ? 'high' : 'low'}.png`}
          alt="Volume"
        />
      </div>
      <div
        className="content-placeholder"
        style={{ backgroundColor: calculateBackgroundColor() }}
      />
    </div>
  );
};

export default MediaPlayer;
