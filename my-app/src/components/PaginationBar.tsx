import React from 'react';
import {FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight} from "react-icons/fa";


interface Props {
    currentPage: number;
    pageCount: number;
    handlePrevPage: () => void;
    handleNextPage: () => void;
    handleLastPage: () => void;
    handleFirstPage: () => void;
}

export const PaginationBar = ({pageCount, handlePrevPage, handleNextPage, currentPage, handleLastPage, handleFirstPage}: Props) => {

    return <>
        <ul className="flex justify-center items-center my-10 my-20">
            <li className={`mr-4 cursor-pointer hover:text-primary ${currentPage === 1 ? 'opacity-10' : ''}`}
                onClick={handleFirstPage}>
                <FaAngleDoubleLeft/>
            </li>
            <li className={`mr-4 cursor-pointer hover:text-primary ${currentPage === 1 ? 'opacity-10' : ''}`}
                onClick={handlePrevPage}>
                <FaAngleLeft/>
            </li>
            <li className="mr-4 font-bold">Page {currentPage}</li>
            <li className={`mr-4 cursor-pointer hover:text-primary ${currentPage === pageCount ? 'opacity-10' : ''}`}
                onClick={handleNextPage}>
                <FaAngleRight/>
            </li>
            <li className={`mr-4 cursor-pointer hover:text-primary ${currentPage === pageCount ? 'opacity-10' : ''}`}
                onClick={handleLastPage}>
                <FaAngleDoubleRight/>
            </li>
        </ul>
    </>


}
