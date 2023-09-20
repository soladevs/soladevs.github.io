import React, { useState, useEffect } from 'react';

function CursorLines() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mousemove events to track cursor position
    document.addEventListener('mousemove', updateCursorPosition);

    // Clean up the event listener when unmounting
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const cursorStyle = {
    position: 'fixed',
    top: `${cursorPosition.y}px`,
    left: `${cursorPosition.x}px`,
    transform: 'translate(-50%, -50%)', // Center the element on the cursor
    zIndex: 2, // Ensure it's above other elements
    pointerEvents: 'none',
    userSelect: 'none'
  };

  return (
    <div>
      {/* Vertical Line (VR) */}
      <div
        style={{
          ...cursorStyle,
          width: '2px',
          height: '200vh', // Full viewport height
          background: '#3A3335',
          opacity: '0.5'
        }}
      ></div>

      {/* Horizontal Line (HR) */}
      <div
        style={{
          ...cursorStyle,
          width: '200vw', // Full viewport width
          height: '2px',
          background: '#3A3335',
          opacity: '0.5'
        }}
      ></div>
    </div>
  );
}

export default CursorLines;
