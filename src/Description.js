import React from 'react';
import videoBg from "./components/sky.mp4";
import './styling/Description.css'; // Import CSS file for styling
import './styling/App.css'; // Import CSS file for styling


const Description = () => {
  // Function to generate a random 2-digit number
  const generateRandomNumber = () => {
    // Generate a random number between 10 and 99
    return Math.floor(Math.random() * 90) + 10;
  };

  // Generate a random 2-digit number
  const randomId = generateRandomNumber();

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Video */}
      <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity:'0.8' }} playbackRate={0.25} >
        <source src={videoBg} type="video/mp4"></source>
      </video>

      {/* Container for elements */}
      <div className="container">
        {/* Welcome text */}
        <div className="welcome">Welcome</div>

        {/* Input Box */}
        <div className="text-box">
          Welcome to our multimedia interaction experiment!
          <br /><br />
          This experiment offers you an opportunity to interact with a diverse range of audio content while contributing to scientific research on emotions and multimedia. As you engage with different audio stimuli, we'll be asking you to rate the valence and arousal of each audio, indicating how it impacts your mood. Your participation will help us understand the intricate relationship between multimedia and emotions, ultimately enhancing user experiences in digital environments.
          <br /><br />
          Enjoy the journey and thank you for being a part of our study!
        </div>

        {/* Next button links */}
        <button className="next-button" onClick={() => window.location.href = "/consent"}>Next</button>


      </div>

        {/* Participant ID */}
        <button className="user-id">{randomId}</button>

        {/* VibeVision text */}
        <div className="vibe-vision">VibeVision</div>
    </div>
  );
};

export default Description;
