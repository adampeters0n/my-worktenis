import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // Použití HashRouteru
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './output.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Měření výkonu aplikace (volitelné)
reportWebVitals();
