import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Importing NavtiveRouter for react native
 */

import { NavtiveRouter } from '{Use ReactNative here}';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavtiveRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </NavtiveRouter>
);
