import {PostEntity} from "types";
import React, {createContext, ReactNode, useContext, useState} from "react";

interface PostsContextProps {
    posts: PostEntity[];
    setPosts: React.Dispatch<React.SetStateAction<PostEntity[]>>
}


export const PostsContext = createContext<PostsContextProps>({
    posts: [],
    setPosts: () => {}
});


export const usePostListContext = () => {
    return useContext(PostsContext);
};

interface PostsContextProviderProps {
    children: ReactNode;
}

export const PostsContextProvider: React.FC<PostsContextProviderProps> = ({children}) => {
    const [posts, setPosts] = useState<PostEntity[]>([]);

    const contextValues: PostsContextProps = {
        posts,
        setPosts,
    }

    return (
        <PostsContext.Provider value={contextValues}>
            {children}
        </PostsContext.Provider>
    )
}
