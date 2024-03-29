import React, { useEffect } from 'react';
import { SinglePostCard } from "./SinglePostCard";
import { usePostListContext } from "../context/PostsContext";

export const PostsCards = () => {
    const { posts, setPosts } = usePostListContext();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:3001/post`);
                const result = await res.json();
                setPosts(result);
                console.log(result);
            } catch (err) {
                throw new Error("Test");
            }
        })()
    }, []);

    return (
        <section className="flex flex-wrap gap-10 my-10">
            {Array.isArray(posts) && posts.map((post) => (
                <SinglePostCard key={post._id?.toString()} post={post}/>
            ))}
        </section>
    )
}
