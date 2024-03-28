import React, {useState} from 'react';
import {LuMenu} from "react-icons/lu";
import {Button} from "./common/Button";
import {AccordionMenu} from "./AccordionMenu";

export const AccordionMenuButton = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(!isOpen);
    }

    return (
        <div>
            <Button onClick={handleToggleMenu} reactIcon={<LuMenu/>}/>
            {isOpen ? <AccordionMenu/> : null}
        </div>
    );
}
