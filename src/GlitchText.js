import React, { Component } from 'react';

class GlitchText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originalText: props.text,
      glitchedText: props.text,
      isHovered: false,
    };

    this.letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.glitchInterval = null;
  }

  componentDidMount() {
    this.startGlitch();
  }

  componentWillUnmount() {
    this.stopGlitch();
  }

  startGlitch = () => {
    this.glitchInterval = setInterval(this.randomizeText, 50);
  };

  stopGlitch = () => {
    clearInterval(this.glitchInterval);
  };

  randomizeText = () => {
    if (!this.state.isHovered) {
      const { originalText } = this.state;
      let glitchedText = '';

      for (let i = 0; i < originalText.length; i++) {
        const char = originalText[i];
        if (char === ' ') {
          glitchedText += ' ';
        } else {
          const randomChar =
            this.letters[Math.floor(Math.random() * this.letters.length)];
          glitchedText += randomChar;
        }
      }

      this.setState({ glitchedText });
    }
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
    this.stopGlitch();
    const { originalText } = this.state;
    this.setState({ glitchedText: originalText });
  };

  handleMouseLeave = () => {
    this.startGlitch();
  };

  render() {
    const { glitchedText } = this.state;

    return (
      <span
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {glitchedText}
      </span>
    );
  }
}

export default GlitchText;
