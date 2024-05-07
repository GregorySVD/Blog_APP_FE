import React from 'react';
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";


interface Props {
    currentPage: number;
    pageCount: number;
    handlePrevPage: () => void;
    handleNextPage: () => void;
}

export const PaginationBar = ({pageCount, handlePrevPage, handleNextPage, currentPage}: Props) => {

    return <>
        <ul className="flex justify-center items-center my-10 my-20">
            <li className={`mr-4 cursor-pointer text-xl hover:text-primary ${currentPage === 1 ? 'opacity-10' : ''}`}
                onClick={handlePrevPage}>
                <FaAngleLeft/>
            </li>
            <li className="mr-4 cursor-pointer">Page {currentPage}</li>
            <li className={`mr-4 cursor-pointer text-xl hover:text-primary ${currentPage === pageCount ? 'opacity-10' : ''}`}
                onClick={handleNextPage}>
                <FaAngleRight/>
            </li>
        </ul>
    </>


}
