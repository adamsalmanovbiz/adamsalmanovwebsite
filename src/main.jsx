import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import AdamSalmanov from './AdamSalmanov.jsx';
import Articles from './Articles.jsx';
import ArticlePage from './ArticlePage.jsx';

import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<AdamSalmanov />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
