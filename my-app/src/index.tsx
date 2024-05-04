import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeContextProvider} from './context/ThemeContext';
import {PostsContextProvider} from './context/PostsContext';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeContextProvider>
                <PostsContextProvider>
                    <App/>
                </PostsContextProvider>
            </ThemeContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
