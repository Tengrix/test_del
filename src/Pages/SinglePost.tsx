import React, {useEffect, useState} from 'react';
import {CommentsType, PostType} from "../types/Types";
import {UseFetching} from "../hooks/useFetching";
import {getPostById, getPostComments} from "../api/api";
import {useParams} from "react-router-dom";
import s from './SinglePost.module.css'
import Loading from "../Components/LoadingComponent/Loading";

const SinglePost = () => {
    const {id} = useParams<{id:string}>()
    const [post,setPost] = useState<PostType>()
    const [comments,setComments] = useState<CommentsType[]>([])
    const [fetchPost,isPostLoading, postError] = UseFetching(async ()=>{
        const res = await getPostById(id)
        setPost(res.data)
        const allComments = await getPostComments(id)
        setComments(allComments.data)
    })
    useEffect(()=>{
        // @ts-ignore
        fetchPost()

    },[])
    return (
        <div>
            <h1>
                POST ID - {id}
            </h1>
            <div>
                <strong>Title - </strong>
                {isPostLoading
                    ?<Loading/>
                    : post?.title
                }
            </div>
            <h2>Comments</h2>
            {isPostLoading
                ?<Loading/>
                : comments.map((el,idx)=>
                <div className={s.comments} key={el.id}>
                    {idx+1}.{el.email}
                    <div >{el.body}</div>
                </div>
            )}
        </div>
    );
};

export default SinglePost;