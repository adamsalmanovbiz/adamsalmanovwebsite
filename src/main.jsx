import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AdamSalmanov from './AdamSalmanov.jsx';
import Articles from './Articles.jsx';
import ArticlePage from './ArticlePage.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/adamsalmanovwebsite">
      <Routes>
        <Route path="/" element={<AdamSalmanov />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        {/* catch-all so weird paths don’t black-screen */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
