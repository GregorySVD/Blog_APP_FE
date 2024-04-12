import React from 'react';
import logo from "../assets/icon.png";

export const Logo = () => {
    return <aside className="flex items-center">
        <img width="50" height="50" className="fill-current" src={logo} alt="Logo of GT.log()"/>
        <div className="flex flex-col ml-1">
            <p className="font-bold">GT.LOG()</p>
            <p>Learning tech since 2022</p>
        </div>
    </aside>
}
