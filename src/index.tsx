import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';

// Create the root with a container element
const root = createRoot(document.getElementById('root')!);

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return (
      <App />
  );
}

// Render the root component
root.render(<AppWithCallbackAfterRender />);

