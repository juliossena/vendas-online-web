import './main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { GlobalProvider } from './shared/hooks/useGlobalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
);
