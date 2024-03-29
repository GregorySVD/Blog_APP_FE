import { PostEntity } from "types";
import {FaRegCalendar} from "react-icons/fa";
import {formatDate} from "../utils/formatDate";

export const SinglePostCard = ({ post }: { post: PostEntity }) => {
    const { imageUrl, createdAt, title } = post;

    return (
        <article className="w-80 border border-gray-300 rounded-br-xl overflow-hidden shadow-lg flex flex-wrap bg-white rounded-br-4xl dark:border-neutral-800 dark:shadow-neutral-500 dark:shadow-md">
            <div className="bg-amber-400 h-40 w-full overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                    src={imageUrl || 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png'}
                    alt="xD" className="w-full h-full object-cover" />
            </div>
            <div className="w-full flex dark:bg-neutral-900">
                <div className="p-6 w-2/3">
                    <h5 className="mb-2 block text-xl">
                        {title || 'Test title'}
                    </h5>
                    <div className="mr-auto mt-1 flex">
                        <span className="flex items-center text-xs gap-1 ">
                            <FaRegCalendar />
                            {!createdAt ? '01.02.03' : formatDate(createdAt)}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    )
}
