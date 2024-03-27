import React from 'react';

interface ButtonProps {
    reactIcon: React.ReactNode;
    onClick: () => void;
}


export const Button: React.FC<ButtonProps> = ({reactIcon, onClick}) => {
    return (
        <button
            className="rounded justify-center items-center text-xl border py-3 px-3 rounded-full hover:bg-neutral-100 transition-colors duration-500"
            onClick={onClick}>
            {reactIcon}
        </button>
    );
};
