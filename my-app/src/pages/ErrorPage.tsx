import React from "react";
import {Logo} from "../components/Logo";
import {GoHomeButton} from "../components/common/GoHomeButton";

interface Props {
    message: string;
    errorStatus?: number
}

export const ErrorPage = ({message, errorStatus}: Props) => {
    return <>
        <div className="h-screen w-screen bg-gray-bg flex justify-center items-center flex-col">
            <Logo/>
            <div className="flex my-20 mb-20 items-center text-3xl">
                <span className="mx-1">{errorStatus}</span>
                <span className="font-thin">{message}</span>
            </div>
            <GoHomeButton/>
        </div>
    </>
}
