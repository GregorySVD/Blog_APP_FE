import React from 'react';
import {FaRegCalendar} from "react-icons/fa";
import {formatDate} from "../utils/formatDate";
import {Tags} from "./Tags";


interface Props {
    title: string,
    createdAt: Date | undefined,
    tags: string[] | undefined,
}

export const SinglePostCardDetails = ({title, createdAt, tags}: Props) => {
    return <div className="w-full bg-dark:bg-neutral-900 p-6 flex flex-col justify-between">
        <a href="https://onet.pl" className="hover:text-red-700 text-xl">
            <h5 className="text-xs sm:text-base lg:text-lg overflow-hidden line-clamp-3">
                {title}
            </h5>
        </a>
        <div className="w-full mr-auto mt-1 flex justify-between">
                        <span className="flex items-center text-xs gap-1 pointer-events-none">
                        <FaRegCalendar/>
                            {!createdAt ? null : formatDate(createdAt)}
                        </span>
            <Tags tags={tags}/>
        </div>
    </div>
}
