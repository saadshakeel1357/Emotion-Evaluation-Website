import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import mySound1 from './audios/89.mp3';
import mySound2 from './audios/193.mp3';
import mySound3 from './audios/367.mp3';
import mySound4 from './audios/486.mp3';
import mySound5 from './audios/714.mp3';
import mySound6 from './audios/1075.mp3';
import mySound7 from './audios/1077.mp3';
import mySound8 from './audios/1555.mp3';
import mySound9 from './audios/1646.mp3';
import './App.css';

const Experiment = () => {
  const [timer, setTimer] = useState(3);
  const navigate = useNavigate();

  const [clickCount] = useState(() => {
    const storedClickCount = localStorage.getItem('clickCount');
    return storedClickCount ? parseInt(storedClickCount, 10) : 1;
  });

  // Define a function to determine the default sound
  const getDefaultSound = () => {
    // Define an array of sound files
    const soundFiles = [mySound1, mySound2, mySound3, mySound4, mySound5, mySound6, mySound7, mySound8, mySound9];
  
    // Ensure clickCount is within the range of available sound files
    const index = Math.min(Math.max(clickCount - 1, 0), soundFiles.length - 1);
  
    // Return the sound file corresponding to the clickCount index
    return soundFiles[index];
  };
  

  // Inside your component:
  const [playSound, { stop }] = useSound(getDefaultSound()); // Default to mySound1
  


  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleStartButtonClick = () => {
    // // Choose the appropriate sound based on clickCount
    // const soundToPlay = clickCount === 1 ? mySound1 : mySound2;
    // // Change the sound source
    // playSound({ sound: soundToPlay });

    console.log("experiment: " + clickCount);

    if (clickCount === 1) {
      playSound(mySound2);
    } else {
      playSound(mySound1);
    };


    // Stop audio after 10 seconds and navigate to '/sliders'
    setTimeout(() => {
      stop(); // Stop the audio
      navigate('/sliders'); // Navigate to '/sliders' route
    }, 10000);
  };

  return (
    <div>
      <p style={{ fontSize: '45px' }}>{timer}</p>
      <div>
        <button className="App-button" onClick={handleStartButtonClick} disabled={timer !== 0}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Experiment;
