// Configuration de base de l'application React
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// Création de la racine de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();