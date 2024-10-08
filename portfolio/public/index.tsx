import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';
import { ThemeProvider } from '../src/contexts/theme';
import '../src/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
