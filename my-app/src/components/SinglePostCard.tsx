import {PostEntity} from "types";
import {SinglePostCardImg} from "./SinglePostCardImg";
import {SinglePostCardDetails} from "./SinglePostCardDetails";

export const SinglePostCard = ({post}: { post: PostEntity }) => {
    const {imageUrl, createdAt, title, tags} = post;

    return (
        <article
            className="w-80 h-80 border border-gray-300 rounded-br-3xl overflow-hidden shadow-lg flex flex-wrap bg-white dark:border-neutral-800 dark:shadow-neutral-500 dark:shadow-md dark:bg-neutral-800">
            <SinglePostCardImg title={title} imageUrl={imageUrl}/>
            <SinglePostCardDetails tags={tags} title={title} createdAt={createdAt}/>

            {/*@TODO:CREATE LINK FOR SINGLE POST LAYOUT*/}
        </article>
    )
}
