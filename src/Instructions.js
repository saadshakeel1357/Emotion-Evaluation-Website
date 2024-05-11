// Instructions.js
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
// import './App.css';
import { useLocation } from 'react-router-dom'; // Import useLocation hook from React Router
import videoBg from "./components/bgvideo.mp4";
import './styling/Instructions.css'; // Import CSS file for styling
import './styling/App.css'; // Import CSS file for styling

// ConsentPage component
const Instructions = () => {

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const randomId = searchParams.get('randomId');
    const [clickCount, setClickCount] = useState(() => {
		// Retrieve click count from local storage or default to 0
		const storedClickCount = localStorage.getItem('clickCount');
		return storedClickCount ? parseInt(storedClickCount, 10) : 1;
	  });
	
	// Handler for reset button click
	const handleResetButtonClick = () => {
		// Clear click count from local storage
		localStorage.removeItem('clickCount');
		console.log("count reset");
		// Reset click count in the state
		setClickCount(0);
	};

	console.log(clickCount);

	return (

		<div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
			{/* Video */}
			<video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity:'0.8' }} playbackrate={0.25} >
				<source src={videoBg} type="video/mp4"></source>
			</video>

			{/* Container for elements */}
			<div className="container">
				{/* Welcome text */}
				<div className="instructions">Instructions</div>

				{/* Input Box */}
				<div className="instructions-box">
				Please read these instructions <b>carefully</b> to complete the experiment smoothly:
					<br /><br />
					<br /><br />
					- When you click the "Start" button below, the experiment <b>begins</b>.
					<br /><br />
					- When you click the "Play" button, a timer will start.
					<br /><br />
					- When the timer hits zero, an audio file will play. 
					<br /><br />
					- Please listen to the audio attentively.
					<br /><br />
					- After the audio is finished playing, you will be asked to report how the audio changes your mood.
					<br /><br />
					- <b>Valence</b> of an emotion refers to extent to which an emotion is positive or negative, and <b>arousal</b> refers to the intensity of the emotion.
					<br /><br />
					- After reporting your emotion, you will see the timer again and the same process will repeat.
					<br /><br />
					- The experiment will be repeated 10 times.
				</div>

				{/* Next button links */}
				<Link to={`/experiment?randomId=${randomId}`} onClick={handleResetButtonClick} className="exp-start-button">Start</Link>
			</div>

			{/* Participant ID */}
			<button className="user-id">{randomId}</button>

			{/* VibeVision text */}
			<div className="vibe-vision">VibeVision</div>
			
			
		</div>
	);
};


export default Instructions;
