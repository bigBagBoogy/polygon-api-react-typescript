import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from './theme';

// Create the root with a container element
const root = createRoot(document.getElementById('root')!);

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return (
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  );
}

// Render the root component
root.render(<AppWithCallbackAfterRender />);

reportWebVitals();
