import React from 'react';

interface NavLinksProps {
    name: string;
    link: string;
}

export const NavLinkLi: React.FC<NavLinksProps> = ({link, name}) => {


    return (
        <li className="mx-2 hover:text-red-700 cursor-pointer font-bold"><a href={link}>{name}</a></li>
    )
}
