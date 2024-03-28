import React from 'react';
import {NavLinkLi} from "./common/NavLinkLi";


export const AccordionMenu = () => {

    return (
        <div className=" fixed top-0 left-0 h-full w-2/4 bg-white dark:bg-neutral-900">
                <nav className="h-1/3">
                    <ul className="flex flex-col items-left h-full justify-evenly mx-2">
                        <NavLinkLi link={"/contact"} name={"Contact"}/>
                        <NavLinkLi link={"/aboutMe"} name={"About Me"}/>
                        <NavLinkLi link={"/blog"} name={"Blog"}/>
                        <NavLinkLi link={"/"} name={"Main Page"}/>
                    </ul>
                </nav>
            </div>

    )
}
