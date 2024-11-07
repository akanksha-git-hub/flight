import React, { useState } from "react";

export default function Jumbotron() {

  return (
    <div className="jumbotron-section wrapper">
      <div
        style={{
          fontSize: '200px',
          display: 'flex',
          whiteSpace: 'nowrap',
          fontWeight: 'bold',
          letterSpacing: '-0.04em',
          position: 'absolute',
          bottom: '100px',
          left: '-300px',
        }}
        className="first-text"
      >
        THE TECHNOLOGY OF FLIGHT
      </div>
    </div>
  );
}
