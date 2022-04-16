import React from 'react';
import s from "./a2_PostItem.module.css";
import MyButton from "./MyButton/MyButton";
import {PostType} from "../types/Types";
import {Link} from "react-router-dom";

type PostItemType = {
    post: PostType;
    delPost: (id: number) => void;
    getSinglePost:(post:PostType)=>void;
}
const PostItem = ({post, delPost,getSinglePost}: PostItemType) => {
    return (
        <div className={s.post}>
            <strong>{post.id}.</strong>
            <Link onClick={()=>getSinglePost(post)} to={`/posts/${post.id}`}>{post.title}</Link>
            <div>
                {post.body}
            </div>
            <MyButton onClick={() => delPost(post.id)}>удалить</MyButton>
        </div>
    );
};

export default PostItem;