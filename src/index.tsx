import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './DarkMode.css';

const root = createRoot(document.getElementById('root')!);

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Add or remove the 'dark-mode' class on the body element based on isDarkMode state
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="App">
      <button id="darkmodeButton" onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <App />
    </div>
  );
}

root.render(<AppWithCallbackAfterRender />);
