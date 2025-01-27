import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

// Initialize theme from system preference
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
document.documentElement.classList.toggle('dark', darkModeMediaQuery.matches);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);