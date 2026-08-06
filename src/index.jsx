import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Helper: toggle a body class when the hash indicates SmartLight route
function updateBodyForSmartLight(hash) {
  try {
    const isSmart = typeof hash === 'string' && hash.indexOf('smart-light') !== -1;
    document.body.classList.toggle('on-smartlight', isSmart);
  } catch {
    // ignore server-side or test environments
  }
}

// Initialize and subscribe to changes
updateBodyForSmartLight(window.location.hash);
window.addEventListener('hashchange', () => updateBodyForSmartLight(window.location.hash));

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);