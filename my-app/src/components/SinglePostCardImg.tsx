import React from 'react';


interface Props {
    title: string;
    imageUrl: string | undefined;
}

export const SinglePostCardImg = ({title, imageUrl}: Props) => {
    if (imageUrl === undefined) imageUrl = "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png";

    return (
        <div
            className="bg-amber-400 h-40 w-full overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <a href="https://onet.pl">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-200 ease-in-out transform-gpu hover:scale-110"
                />
            </a>
        </div>
    )
}
