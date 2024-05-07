// HomePage.js
import React from 'react';
import videoBg from "./components/bgvideo.mp4";
import mySvg from './components/HomePage.svg';
import './styling/HomePage.css'; // Import CSS file for styling
import './styling/App.css'; // Import CSS file for styling

const HomePage = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Video */}
      <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: '0.8' }} playbackRate={0.25} >
        <source src={videoBg} type="video/mp4"></source>
      </video>

      {/* SVG */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <img src={mySvg} alt="Homepage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        {/* Start button */}
        <button className="start-button" onClick={() => window.location.href = "/description"}>Start</button>

        {/* participant id */}
        <button className="user-id">id</button>

        {/* VibeVision text */}
        <div className="vibe-vision">VibeVision</div>

      </div>
    </div>
  );
};

export default HomePage;
