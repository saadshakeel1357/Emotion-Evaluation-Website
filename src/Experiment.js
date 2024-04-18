import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const Experiment = () => {
  const [timer, setTimer] = useState(2); // Initial timer value in seconds
  const navigate = useNavigate();

  // Countdown logic
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown); // Clean up interval on component unmount
  }, []);

  // Handler for start button click
  const handleStartButtonClick = () => {
    // Play audio file logic can be added here
    // For simplicity, let's simulate audio playback with a setTimeout
    setTimeout(() => {
      // Redirect to sliders page after audio finishes
      navigate('/sliders');
    }, 500); // Simulate 5 seconds audio duration
  };

  return (
    <div>
      <p style={{ fontSize: '45px' }}>{timer}</p>
      <div>
        {/* Start button */}
        <button className="App-button" onClick={handleStartButtonClick} disabled={timer !== 0}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Experiment;


// console.log("clickcount:  ", clickCount);
// console.log("updated clickcount:  ", updatedClickCount);