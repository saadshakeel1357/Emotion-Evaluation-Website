import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import videoBg from "./components/sky.mp4";
import mySvg from './components/ConsentPage.svg';

// ConsentPage component
const ConsentPage = () => {
  // State to manage checkbox status
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  // Handler for checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // // Handler for next button click
  // const handleNextButtonClick = () => {
  //   if (isChecked) {
  //     // Navigate to the next page if checkbox is checked
  //     navigate('/demographic');
  //   } else {
  //     // Display an alert or handle the case when checkbox is not checked
  //     alert('Please agree to the terms and conditions to proceed.');
  //   }
  // };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Video */}
      <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity:'0.7' }} playbackRate={0.25} >
        <source src={videoBg} type="video/mp4"></source>
      </video>

      {/* SVG */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <img 
        src={mySvg} 
        alt="Consent Page" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover'
        }} 
      />


        
        {/* Start button links */}
        <a href="/demographic" style={{ position: 'absolute', top: '84.4%', left: '62.3%', transform: 'translate(-50%, -50%)', color: 'white', textDecoration: 'none', padding: '10px 25px',  borderRadius: '10px'}}> </a>
        
      </div>
    </div>
  );
};

export default ConsentPage;
