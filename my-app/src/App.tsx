import React, {useEffect, useState} from 'react';


function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="text-center text-xl w-screen h-screen font-sans bg-white text-black flex justify-center items-center dark:bg-neutral-950 dark:text-white" >
            <h1>Test</h1>
            <button className="px-4 py-2 bg-green-400 rounded justify-center" onClick={handleThemeSwitch}>
                Dark Mode
            </button>
        </div>
    );
}

export default App;
