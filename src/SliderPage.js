import React, { useState} from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook from React Router
import { useNavigate } from 'react-router-dom';
import './styling/SliderPage.css';
import videoBg from "./components/bgvideo.mp4";
import VAImage from "./components/valence-arousal.png"; // Import your image file



const SliderPage = () => {
  // Initialize necessary state variables
  const navigate = useNavigate();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
  const randomId = searchParams.get('randomId');

  const [valence, setValence] = useState(1); // Initial value for valence slider
  const [arousal, setArousal] = useState(1); // Initial value for arousal slider

  const [valenceModified, setValenceModified] = useState(false); // Track if valence slider is modified
  const [arousalModified, setArousalModified] = useState(false); // Track if arousal slider is modified

  // Handler for valence slider change
  const handleValenceChange = (e) => {
    setValence(Number(e.target.value));
    setValenceModified(true); // Set valenceModified to true when valence slider is modified
  };
  const [clickCount, setClickCount] = useState(() => {
		// Retrieve click count from local storage or default to 0
		const storedClickCount = localStorage.getItem('clickCount');
		return storedClickCount ? parseInt(storedClickCount, 10) : 1;
	});

  // Handler for arousal slider change
  const handleArousalChange = (e) => {
    setArousal(Number(e.target.value));
    setArousalModified(true); // Set arousalModified to true when arousal slider is modified
  };

  const data = {};

  // Handler for next button click
  const handleNextButtonClick = () => {
    console.log(clickCount)
    // Check if both valence and arousal sliders are modified
    if (valenceModified && arousalModified) {
      // Increment click count
      const updatedClickCount = clickCount + 1;
      setClickCount(updatedClickCount);

      // Save current valence and arousal values to session storage
      sessionStorage.setItem(`valence${updatedClickCount-1}`, valence.toString());
      sessionStorage.setItem(`arousal${updatedClickCount-1}`, arousal.toString());

      // Retrieve valence and arousal values from session storage and store in data object
      for (let i = 1; i <= 10; i++) {
        data[`valence${i}`] = sessionStorage.getItem(`valence${i}`);
        data[`arousal${i}`] = sessionStorage.getItem(`arousal${i}`);
      }

      // Save click count to local storage
      localStorage.setItem('clickCount', updatedClickCount.toString());

      if (updatedClickCount > 3) {
        // Convert data to JSON string
        const jsonData = JSON.stringify(data);

        // Create a blob with the data
        const blob = new Blob([jsonData], { type: 'application/json' });

        // Create a link to download the JSON file
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'session_data.json';

        // Trigger the click event of the link to start download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Clear session storage
        sessionStorage.clear();

        // Redirect to thank you page if click count exceeds 10
        navigate(`/thankyou?randomId=${randomId}`)
      } else {
        // Redirect back to the timer page to restart the process
        navigate(`/experiment?randomId=${randomId}`);
      }
    } else {
      // Alert user if sliders are not both modified
      alert('Please modify both sliders before proceeding.');
    }
  };



  return (
    <div>


			{/* Video */}
			<video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity:'0.8' }} playbackrate={0.25} >
				<source src={videoBg} type="video/mp4"></source>
			</video>

      <img src={VAImage} alt="Background" style={{ position: 'absolute', top: '148px', left: '850px', width: '24%', height: '30%' }} />


      <div className="slider-box">

        <div className='sliders'>

              {/* Valence slider */}
              <div  className='slider'>
                <label htmlFor="valenceSlider">Valence:</label>
                <input
                  type="range"
                  id="valenceSlider"
                  name="valenceSlider"
                  min="1"
                  max="9"
                  value={valence}
                  onChange={handleValenceChange}
                />
                <span>{valence}</span>
              </div>

              {/* Arousal slider */}
              <div className='slider'>
                <label htmlFor="arousalSlider">Arousal:</label>
                <input
                  type="range"
                  id="arousalSlider"
                  name="arousalSlider"
                  min="1"
                  max="9"
                  value={arousal}
                  onChange={handleArousalChange}
                />
                <span>{arousal}</span>
              </div>
      
        </div>
        
      </div>

      {/* Participant ID */}
      <button className="user-id">{randomId}</button>

      {/* VibeVision text */}
      <div className="vibe-vision">VibeVision</div> 

      {/* Next button */}
      <button className="slider-button" onClick={handleNextButtonClick} >
        Next
      </button>

    </div>
  );
};

export default SliderPage;