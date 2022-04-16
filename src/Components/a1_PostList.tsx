import React from 'react';
import {PostType} from "../types/Types";
import PostItem from "./a2_PostItem";
import s from './a1_PostList.module.css'
type PostListType = {
    sortedAndSearchedPost: PostType[];
    delPost: (id: number) => void
    getSinglePost:(post:PostType)=>void;
}
const PostList = React.memo(({getSinglePost,sortedAndSearchedPost, delPost}: PostListType) => {
    return (
        <div>
            {sortedAndSearchedPost.length === 0 ? <h1>Постов не найдено!</h1> :
                sortedAndSearchedPost.map((post) =>
                        <PostItem
                            key={post.id}
                            post={post}
                            delPost={delPost}
                            getSinglePost={getSinglePost}
                        />
                )}
        </div>

    );
});

export default PostList;