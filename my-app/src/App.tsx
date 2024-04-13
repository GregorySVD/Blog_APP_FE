import React, {useEffect} from 'react';
import {useDarkTheme} from "./context/ThemeContext";
import { Route, Routes } from 'react-router-dom';
import {Home} from "./pages/Home";
import {AboutProject} from "./pages/AboutProject";
import {Contact} from "./pages/Contact";
import {Blog} from "./pages/Blog";

function App() {
    const {darkTheme} = useDarkTheme();

    useEffect(() => {
        document.body.classList.toggle('dark', darkTheme);
    }, [darkTheme]);

    return <div className="App">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<AboutProject/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/blog' element={<Blog/>} />
            </Routes>
        </div>
}

export default App;
