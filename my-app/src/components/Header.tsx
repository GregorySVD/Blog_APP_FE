import React from "react";
import {ThemeChanger} from "./ThemeChanger";
import {Nav} from "./Nav";
import {AccordionMenuButton} from "./AccordionMenuButton";


interface HeaderProps {
    logo: string;
}

export function Header({logo}: HeaderProps) {

    return (
        <header className="py-2 px-4 bg-inherit w-screen sticky top-0">
            <div className="container flex items-center justify-between w-full">
                <div id="logo" className="w-1/5 items-center">
                    <a href="https://github.com/GregorySVD">
                        <img className="max-h-16" src={logo} alt="Logo GT.log()"/>
                    </a>
                </div>
                <Nav/>
                <div className="flex flex-row gap-3">
                    <ThemeChanger/>
                    <AccordionMenuButton/>
                </div>
            </div>
        </header>
    )
}
