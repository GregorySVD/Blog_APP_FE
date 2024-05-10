import React from 'react';
import {NavLinkLi} from "./common/NavLinkLi";


export const Nav = () => {
    return (
        <nav className="h-full">
            <ul className="flex flex-row items-center h-full">
                <NavLinkLi link={"/contact"} name={"Contact"}/>
                <NavLinkLi link={"/about"} name={"About Project"}/>
                <NavLinkLi link={"/"} name={"Blog"}/>
            </ul>
        </nav>
    );
}
