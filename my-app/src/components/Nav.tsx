import React from 'react';
import {NavLinkLi} from "./common/NavLinkLi";


export const Nav = () => {
    return (
        <nav className="h-full">
            <ul className="flex flex-row items-center h-full">
                <NavLinkLi link={"/contact"} name={"Contact"}/>
                <NavLinkLi link={"/aboutMe"} name={"About Me"}/>
                <NavLinkLi link={"/blog"} name={"Blog"}/>
                <NavLinkLi link={"/"} name={"Main Page"}/>
            </ul>
        </nav>
    );
}
