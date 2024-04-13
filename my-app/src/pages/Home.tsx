import React from 'react';
import {Header} from "../components/Header";

export const Home = () => {
    return (
        <div className="font-sans bg-white text-black flex flex-col dark:bg-neutral-900 dark:text-white min-h-full w-full">
            <Header/>
            <h1>Home</h1>
        </div>

    )
}
