import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PostContextWrapper from './Context/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostContextWrapper>
    <App />
    </PostContextWrapper>
  </React.StrictMode>
);

