import React from 'react';
import ReactDOM from 'react-dom/client';
import q3a from './q3a';
import q3b from './q3b';
import q3c from './q3c';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <q3a />
    <q3b />
    <q3c />

  </BrowserRouter>
);
