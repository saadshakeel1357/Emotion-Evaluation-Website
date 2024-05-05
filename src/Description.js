// Description.js
import React from 'react';
import videoBg from "./components/sky.mp4";
import mySvg from './components/Description.svg';

const Description = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Video */}
      <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity:'0.9' }} playbackRate={0.25} >
        <source src={videoBg} type="video/mp4"></source>
      </video>

      {/* SVG */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <img src={mySvg} alt="Experiment Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        
        {/* Start button links */}
        <a href="/consent" style={{ position: 'absolute', top: '84.4%', left: '62.3%', transform: 'translate(-50%, -50%)', color: 'white', textDecoration: 'none', padding: '10px 25px',  borderRadius: '10px'}}> </a>
        
      </div>
    </div>
  );
};

export default Description;