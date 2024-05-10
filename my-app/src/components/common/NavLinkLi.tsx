import React from 'react';
import {Link} from "react-router-dom";

interface NavLinksProps {
    name: string;
    link: string;
}

export const NavLinkLi: React.FC<NavLinksProps> = ({link, name}) => {


    return (
        <li className="mx-4 hover:text-red-700 cursor-pointer font-bold">
            <Link to={link}>{name}</Link>
        </li>
    )
}
