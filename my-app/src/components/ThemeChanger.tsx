import React from 'react';
import {useDarkTheme} from "../context/ThemeContext";
import {LuMoonStar, LuSun} from "react-icons/lu";
import {Button} from "./common/Button";

export const ThemeChanger = () => {

    const {darkTheme, setDarkTheme} = useDarkTheme();
    const handleThemeSwitch = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <Button onClick={handleThemeSwitch} reactIcon={darkTheme ? <LuMoonStar/> : <LuSun/>}/>
    )

}
