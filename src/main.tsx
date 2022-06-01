import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes } from './routes';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);
