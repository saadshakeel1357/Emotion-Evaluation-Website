// HomePage.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook from React Router
import videoBg from "./components/bgvideo.mp4";
import thanksSvg from "./components/ThankYou.svg";
import './styling/ThankYou.css'; // Import CSS file for styling
import './styling/App.css'; // Import CSS file for styling

const ThankYou = () => {

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const randomId = searchParams.get('randomId');

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Video */}
      <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: '0.8' }} playbackRate={0.25} >
        <source src={videoBg} type="video/mp4"></source>
      </video>

      {/* SVG */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <img src={thanksSvg} alt="thanks" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        {/* Start button */}
        {/* <button className="stats-button" onClick={() => window.location.href = "/"}>Results</button> */}

        {/* participant id */}
        <button className="user-id">{randomId}</button>

        {/* VibeVision text */}
        <div className="vibe-vision">VibeVision</div>

      </div>
    </div>
  );
};

export default ThankYou;
