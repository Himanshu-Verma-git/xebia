import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import axios from 'axios';
import './index.css';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || '/api';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
