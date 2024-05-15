import React, {useEffect, useState} from 'react';
import {PageHeader} from "../components/PageHeader";
import {Footer} from "../components/Footer";
import {useParams} from "react-router-dom";
import {PostEntity} from 'types';
import {LoaderSpinner} from "../components/common/LoaderSpinner";
import {ErrorPage} from "./ErrorPage";


export const BlogSinglePost = () => {

    const {id} = useParams();
    const [post, setPost] = useState<PostEntity | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>(undefined);
    const [errorStatus, setErrorStatus] = useState<number | undefined>(undefined);


    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:3001/post/${id}`);
                const result = await res.json();
                setPost(result);
                setIsLoading(false);
                if (result.error) {
                    setError(result.error);
                    setErrorStatus(result.errorStatus);
                }
            } catch (err) {
                setIsLoading(false);
            }
        })();
    }, []);

    return (
        <>
            {isLoading && <LoaderSpinner/>}
            {error ? <ErrorPage message={error} errorStatus={errorStatus}/> :
                <div
                    className="relative font-sans bg-white text-black flex flex-col dark:bg-neutral-900 dark:text-white min-h-full w-full">
                    <PageHeader/>

                    {post && (
                        <main className="px-10 flex-grow">
                            <h1>{post.title}</h1>
                            <p>{post.content}</p>
                            <img src={post.imageUrl} alt={post.title}/>
                        </main>
                    )}
                    <Footer/>
                </div>
            }

        </>


    )
}
