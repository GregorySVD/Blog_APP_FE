import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeContextProvider} from "./context/ThemeContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <App/>
        </ThemeContextProvider>
    </React.StrictMode>
);
reportWebVitals();
