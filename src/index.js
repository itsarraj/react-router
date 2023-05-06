import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Importing unstable_HistoryRouter used to manipulate browser history
 */

import { unstable_HistoryRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <unstable_HistoryRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </unstable_HistoryRouter>
);
