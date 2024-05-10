import React, {useEffect, useState} from 'react';
import {SinglePostCard} from "./SinglePostCard";
import {usePostListContext} from "../context/PostsContext";
import {PaginationBar} from "./PaginationBar";

export const PostsCards = () => {
    const {posts, setPosts} = usePostListContext();

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:3001/post?page=${currentPage}`);
                const result = await res.json();
                await setPosts(result.posts);
                await setPageCount(result.pageCount);
            } catch (err) {
                throw new Error("Test");
            }
        })()
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleLastPage = () => {
        setCurrentPage(pageCount);
    }
    const handleFirstPage = () => {
        setCurrentPage(1);
    }

    return (
        <div>
            <section className="flex flex-wrap gap-10 my-10">
                {Array.isArray(posts) && posts.map((post) => (
                    <SinglePostCard key={post._id?.toString()} post={post}/>
                ))}
            </section>
            {pageCount > 1 ? <PaginationBar
                currentPage={currentPage}
                pageCount={pageCount}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                handleLastPage={handleLastPage}
                handleFirstPage={handleFirstPage}
            /> : null}
        </div>
    )

}
