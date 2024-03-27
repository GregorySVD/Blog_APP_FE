import React from 'react';

export const Nav = () => {
    return (
        <nav className="h-full">
            <ul className="flex flex-row items-center h-full">
                <li className="mx-2 hover:text-red-700 cursor-pointer"><a href="/contact">Contact</a></li>
                <li className="mx-2 hover:text-red-700 cursor-pointer"><a href="/aboutMe">About Me</a></li>
                <li className="mx-2 hover:text-red-700 cursor-pointer"><a href="/blog">Blog</a></li>
                <li className="mx-2 hover:text-red-700 cursor-pointer"><a href="/">Main Page</a></li>
            </ul>
        </nav>
    );
}
