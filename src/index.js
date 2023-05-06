import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Importing StaticRouter if you render all your component on server
 * if we are doing server side rendering it is usefull
 */

import { StaticRouter } from 'react-router-dom/server';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StaticRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </StaticRouter>
);
