import React from 'react';
import {Header} from "../components/Header";
import {PostsCards} from "../components/PostsCards";
import {Footer} from "../components/Footer";

export const Blog = () => {
    return (
        <div className="relative">
            <div className="font-sans bg-white text-black flex flex-col dark:bg-neutral-900 dark:text-white min-h-full w-full">
                <Header/>
                <main className="px-10 flex-grow">
                    <hr/>
                    <div className="flex flex-col">
                        <h1 className="text-6xl">Blog Readme</h1>
                        <p className="text-2xl my-1">My road to IT</p>
                    </div>
                    <hr/>
                    <PostsCards/>
                </main>
            </div>
            <Footer/>
        </div>
    )
}
