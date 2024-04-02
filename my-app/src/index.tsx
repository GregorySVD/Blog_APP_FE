import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeContextProvider} from "./context/ThemeContext";
import {PostsContextProvider} from "./context/PostsContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <PostsContextProvider>
                <App/>
            </PostsContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>
);
reportWebVitals();
