// Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function ExternalLink() {
  // Here, you can use a simple Link to an external URL
  return (
    <a href="https://bigbagboogy.github.io" target="_blank" rel="noopener noreferrer">
      External Link
    </a>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/external" element={<ExternalLink />} />
    </Routes>
  );
}

export default AppRoutes;
