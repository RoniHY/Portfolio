import React from 'react';
import ReactDOM from 'react-dom/client';

// Fonts (self-hosted, no render-blocking)
import '@fontsource/lora/400.css';
import '@fontsource/lora/700.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

// Global styles (order matters)
import './styles/variables.css';
import './styles/reset.css';
import './styles/global.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
