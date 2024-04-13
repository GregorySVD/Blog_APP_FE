import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './context/ThemeContext';
import { PostsContextProvider } from './context/PostsContext';

ReactDOM.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <PostsContextProvider>
                <App />
            </PostsContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
