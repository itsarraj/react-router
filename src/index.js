import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Importing MemoryRouter used to store routes history in memory
 * usefull when we are carrying out tests
 */

import { MemoryRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MemoryRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </MemoryRouter>
);
