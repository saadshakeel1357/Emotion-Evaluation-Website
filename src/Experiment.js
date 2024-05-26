import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Import useLocation hook from React Router
import useSound from 'use-sound';
import mySound1 from './audios/89.mp3';
import mySound2 from './audios/193.mp3';
import mySound3 from './audios/367.mp3';
import mySound4 from './audios/486.mp3';
import mySound5 from './audios/540.mp3';
import mySound6 from './audios/714.mp3';
import mySound7 from './audios/1075.mp3';
import mySound8 from './audios/1077.mp3';
import mySound9 from './audios/1555.mp3';
import mySound10 from './audios/1646.mp3';
import videoBg from "./components/bgvideo.mp4";
import './styling/Experiment.css';

const Experiment = () => {
  const [timer, setTimer] = useState(`_`); // Initialize timer state to null
  const [playButtonDisabled, setPlayButtonDisabled] = useState(false); // State to manage play button disable/enable
  const navigate = useNavigate();

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
  const randomId = searchParams.get('randomId');
  const [clickCount] = useState(() => {
    const storedClickCount = localStorage.getItem('clickCount');
    return storedClickCount ? parseInt(storedClickCount, 10) : 1;
  });

  // Define a function to determine the default sound
  const getDefaultSound = () => {
    // Define an array of sound files
    const soundFiles = [mySound1, mySound2, mySound3, mySound4, mySound5, mySound6, mySound7, mySound8, mySound9, mySound10];
  
    // Ensure clickCount is within the range of available sound files
    const index = Math.min(Math.max(clickCount - 1, 0), soundFiles.length - 1);
  
    // Return the sound file corresponding to the clickCount index
    return soundFiles[index];
  };

  // Inside your component:
  const [playSound, { stop }] = useSound(getDefaultSound()); // Default to mySound1

  const handleStartButtonClick = () => {
    // Update timer to start countdown
    setTimer(3);
    // Disable the play button after it's clicked
    setPlayButtonDisabled(true);
  };

  useEffect(() => {
    // Start countdown only when timer is not null
    if (timer !== null && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
  
      // Clean up interval when component unmounts or timer reaches 0
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      // Play sound and navigate when timer reaches 0
      playSound(getDefaultSound());
      setTimeout(() => {
        stop(); // Stop the audio
        // navigate('/sliders'); // Navigate to '/sliders' route
        navigate(`/sliders?randomId=${randomId}`);
      }, 10000); // Stop audio after 10 seconds
    }
  });

  return (
    <div>

			{/* Video */}
			<video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity:'0.8' }} playbackrate={0.25} >
				<source src={videoBg} type="video/mp4"></source>
			</video>

      {/* {timer !== null && ( */}
      <p className="timer">{timer}</p>
      {/* // )} */}
      <div>
        <button className="play-button" onClick={handleStartButtonClick} disabled={playButtonDisabled}>
          Play
        </button>
      </div>

    
			  {/* Participant ID */}
			  <button className="user-id">{randomId}</button>

        {/* VibeVision text */}
        <div className="vibe-vision">VibeVision</div> 
    </div>
  );
};

export default Experiment;
