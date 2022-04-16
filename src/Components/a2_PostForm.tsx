import React, {ChangeEvent, useState} from 'react';
import MyButton from "./MyButton/MyButton";
import MyInput from "./MyInput/MyInput";
import {PostType} from "../types/Types";
type PostFormType = {
    addPost:(newPost:PostType)=>void;
}
const PostForm =React.memo (({addPost}:PostFormType) => {
    const [values, setValues] = useState<PostType>({userId:Math.random(), id:+new Date(), body:'', title:''})
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    const addNewPost = (e:React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        const newPost = {
            ...values
        }
        addPost(newPost)
        setValues({userId:Math.random(), id:Math.random(), body:'', title:''})
    }
    return (
        <form>
            <MyInput placeholder={'Title'} value={values.title} type="text" name={'title'} onChange={onChangeHandler}/>
            <MyInput placeholder={'Description'} value={values.body} type="text" name={'body'} onChange={onChangeHandler}/>
            <MyButton type='submit' onClick={(e)=>addNewPost(e as any)}>Create</MyButton>
        </form>
    );
});

export default PostForm;