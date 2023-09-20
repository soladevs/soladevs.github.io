import React, { Component } from 'react';

class ScanlineEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanlines: this.generateScanlines(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ scanlines: this.generateScanlines() });
    }, 750); // Regenerate scanlines every second
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  generateScanlines() {
    return Array.from({ length: 12 }, () => this.createScanline());
  }

  createScanline() {
    const position = Math.random() * 100 - (Math.random() * 100); // Random position
    const opacity = Math.random() * 0.4 + 0.1; // Random opacity between 0.2 and 0.7
    const zIndex = Math.random() > 0.5 ? 5 : -1;
    return { position, opacity, zIndex };
  }

  render() {
    const { scanlines } = this.state;

    return (
      <div className="scanline-effect">
        {scanlines.map((scanline, index) => (
          <hr
            key={index}
            className="scanline"
            style={{
              top: `${scanline.position}%`,
              opacity: scanline.opacity,
              zIndex: scanline.zIndex,
            }}
          />
        ))}
      </div>
    );
  }
}

export default ScanlineEffect;
