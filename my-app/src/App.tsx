import React, {useEffect} from 'react';
import {Header} from "./components/Header";
import lightLogo from "./assets/light-logo.png";
import darkLogo from "./assets/dark-logo.png";
import {useDarkTheme} from "./context/ThemeContext";
import {ArticleLayout} from "./components/ArticleLayout";


function App() {
    const {darkTheme} = useDarkTheme();
    useEffect(() => {
        document.body.classList.toggle('dark', darkTheme);
    }, [darkTheme]);

    return (
        <div
            className="font-sans bg-white flex flex-col dark:bg-neutral-900 dark:text-white h-full w-full">
            <Header logo={darkTheme ? darkLogo : lightLogo}/>

            <main className="px-10">
                <hr/>
                <div className="flex flex-col">
                    <h1 className="text-6xl">Blog Readme </h1>
                    <p className="text-2xl my-1">My road to IT </p>
                </div>
                <hr/>
                <ArticleLayout/>
            </main>
        </div>
    );
}

export default App;
