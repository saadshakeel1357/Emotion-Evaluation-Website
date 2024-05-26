import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook from React Router
import videoBg from "./components/bgvideo.mp4";
import './styling/StatsPage.css'; // Import CSS file for styling

const StatsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const randomId = searchParams.get('randomId');

  const data = {};

  for (let i = 1; i <= 10; i++) {
    data[`valence${i}`] = sessionStorage.getItem(`valence${i}`);
    data[`arousal${i}`] = sessionStorage.getItem(`arousal${i}`);
  }

  console.log(data);

  // Create the table data dynamically
  const tableData = Array.from({ length: 10 }, (_, i) => ({
    col1: `${i + 1}`,
    col2: data[`valence${i + 1}`] || 'N/A',
    col3: data[`arousal${i + 1}`] || 'N/A'
  }));

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Video */}
      <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: '0.8' }} playbackRate={0.25} >
        <source src={videoBg} type="video/mp4"></source>
      </video>

      {/* Overlay content */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <div className="statstitle">Results</div>
        {/* Participant ID */}
        <button className="user-id">{randomId}</button>

        {/* VibeVision text */}
        <div className="vibe-vision">VibeVision</div>

        {/* Table */}
        <div className='statstable'>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Audio</th>
                <th>Valence</th>
                <th>Arousal</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.col1}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.col2}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.col3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
