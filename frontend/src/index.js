

import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Ensure the root element exists before rendering
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Report web vitals
reportWebVitals();
