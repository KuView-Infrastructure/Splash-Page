import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import styles from './scss/App.scss';

// react render
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);