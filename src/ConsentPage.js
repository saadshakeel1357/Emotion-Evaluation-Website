import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { useLocation } from 'react-router-dom'; // Import useLocation hook from React Router
import videoBg from "./components/bgvideo.mp4";
import './App.css';
import './styling/ConsentPage.css'; // Import CSS file for styling

const ConsentPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const randomId = searchParams.get('randomId');

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Video */}
      <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity:'0.8' }} playbackRate={0.25} >
        <source src={videoBg} type="video/mp4"></source>
      </video>

      {/* Container for elements */}
      <div className="container">
        {/* Welcome text */}
        <div className="terms-and-conditions">Terms and Conditions</div>

        {/* Input Box */}
        <div className="terms-box">
          When you use this website, you're allowing us to gather and analyze your interaction data, which includes assessing valence and arousal, for research and analysis.
          <br /><br />
          Rest assured, your data will be securely stored and processed using advanced data science methods and back-end technologies.
          <br /><br />
          Your personal information will remain confidential at all times.
          <br /><br />
          We use a unique participant id (top-right corner) to identify your saved data.
          <br /><br />
          By clicking the "I agree" button below, you agree to the conditions defined above.
        </div>

        {/* Next button links */}
        <Link to={`/demographic?randomId=${randomId}`} className="next-button">I agree</Link>
      </div>

      {/* Participant ID */}
      <button className="user-id">{randomId}</button>

      {/* VibeVision text */}
      <div className="vibe-vision">VibeVision</div>
    </div>
  );
};

export default ConsentPage;
