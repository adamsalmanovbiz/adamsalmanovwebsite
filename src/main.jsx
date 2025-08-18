import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AdamSalmanov from './AdamSalmanov.jsx';
import Articles from './Articles.jsx';
import ArticlePage from './ArticlePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/adamsalmanovwebsite">
      <Routes>
        <Route path="/" element={<AdamSalmanov />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
