import React from "react";
import {ThemeChanger} from "./ThemeChanger";
import {Nav} from "./Nav";
import {AccordionMenuButton} from "./AccordionMenuButton";
import {Logo} from "./Logo";


export function Header() {

    return (
        <header className="py-2 px-10 bg-inherit w-screen sticky top-0 z-50">
            <div className="flex items-center justify-between w-full">
                <Logo/>
                <Nav/>
                <div className="flex flex-row gap-3">
                    <ThemeChanger/>
                    <AccordionMenuButton/>
                </div>
            </div>
        </header>
    )
}
