// App.js
import React, { useState } from 'react';
import Navbar from './components/navigation';
import './components/App.css';
import CenteredImageContainer from './components/CenteredImageContainer';

function App() {
  const imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfiaEE4srwVVUsQohMYWsfJcEWr2L5tdQMxYUvl3BM&s';

  // Step 1: Create a state variable for the theme
  const [theme, setTheme] = useState('gray'); // Default theme is gray

  // Step 2: Function to toggle between gray and black themes
  const toggleTheme = () => {
    setTheme(theme === 'gray' ? 'black' : 'gray');
  };

  return (
    <div className={`App ${theme}-theme`}>
      <Navbar toggleTheme={toggleTheme} />
      {/* Toggle button to switch between themes */}
      <button onClick={toggleTheme} className="theme-button">
        Change Theme
      </button>
      {/* Pass theme as a prop to CenteredImageContainer */}
      <CenteredImageContainer theme={theme} imageUrl={imageUrl} />
    </div>
  );
}

export default App;
