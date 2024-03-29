import React from 'react';
import { createRoot } from 'react-dom/client';
import Game from './components/Game';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found!');
const root = createRoot(container);
root.render(<Game />);
