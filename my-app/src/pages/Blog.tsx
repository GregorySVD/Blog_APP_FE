import React from 'react';
import {PageHeader} from "../components/PageHeader";
import {PostsCards} from "../components/PostsCards";
import {Footer} from "../components/Footer";
import {BlogHeaderTitle} from "../components/BlogHeaderTitle";

export const Blog = () => {
    return (
        <>
            <div
                className="relative font-sans bg-neutral-100 text-black flex flex-col dark:bg-neutral-900 dark:text-white min-h-full w-full">
                <PageHeader/>
                <main className="px-10 flex-grow">
                    <BlogHeaderTitle/>
                    <PostsCards/>
                </main>
                <Footer/>
            </div>
        </>
    )
}
