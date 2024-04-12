import React from 'react';
import {FaGithub, FaLinkedin, FaFacebook, FaInstagram} from "react-icons/fa";

interface FooterIcon {
    link: string;
    icon: 'linkedin' | 'github' | 'facebook' | 'instagram'; // Updated icon options
}

export const FooterSocialIcon: React.FC<FooterIcon> = ({link, icon}) => {
    return (
        <div className="text-2xl text-gray-400 dark:hover:text-white">
            <a href={link} target="_blank">
                {icon === 'github' ? <FaGithub/> : icon === 'linkedin' ? <FaLinkedin/> : icon === 'facebook' ?
                    <FaFacebook/> : <FaInstagram/>}
            </a>
        </div>
    );
};
