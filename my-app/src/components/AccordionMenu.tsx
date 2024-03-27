import React, {useState} from 'react';
import {LuMenu} from "react-icons/lu";
import {Button} from "./common/Button";

export const AccordionMenu = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(!isOpen);
    }

    return (
        <Button onClick={handleToggleMenu} reactIcon={<LuMenu/>}/>
    );
}
