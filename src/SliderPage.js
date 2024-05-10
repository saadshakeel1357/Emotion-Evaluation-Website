import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const SliderPage = () => {
  // Initialize necessary state variables
  const navigate = useNavigate();
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
        navigate('/thankyou');
      } else {
        // Redirect back to the timer page to restart the process
        navigate('/experiment');
      }
    } else {
      // Alert user if sliders are not both modified
      alert('Please modify both sliders before proceeding.');
    }
  };



  return (
    <div>
      {/* Header and instructions */}
      <p style={{ fontSize: '25px' }}>Arousal is an emotional dimension of musical energy level, while Valence is an emotional dimension of the comfort level of the listener</p>
      <p style={{ fontSize: '35px' }}>Please report the extent of what you feel about the valence and arousal of the audio played previously</p>

      {/* Valence slider */}
      <div style={{ marginBottom: '20px' }}>
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
      <div style={{ marginBottom: '20px' }}>
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

      {/* Next button */}
      <button className="App-button" onClick={handleNextButtonClick} >
        Next
      </button>


    </div>
  );
};

export default SliderPage;
