import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './index.css';
import App from './App';

/** Désactive l'injection automatique de CSS FontAwesome (import manuel ci-dessus) */
config.autoAddCss = false;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
