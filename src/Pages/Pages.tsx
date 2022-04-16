import React, {useEffect, useState} from 'react';
import '../App.css';
import {PostType, SortAndSearchedTypes} from "../types/Types";
import PostList from "../Components/a1_PostList";
import {UseFilteredPosts} from "../hooks/usePosts";
import {getPosts} from "../api/api";
import Loading from "../Components/LoadingComponent/Loading";
import {UseFetching} from "../hooks/useFetching";
import {getTotalPages} from "../utils/pages";
import Pagination from "../Components/Pagination/Pagination";
import CreateComponent from "../Components/b1_CreateComponent";
import PostFilter from "../Components/a4_PostFilter";

function Pages() {
    const [posts, setPosts] = useState<PostType[]>([])
    const [filteredPost, setFilteredPost] = useState<SortAndSearchedTypes>({sort: '', query: ''})
    const sortedAndSearchedPost = UseFilteredPosts(posts, filteredPost.sort, filteredPost.query)
    const [modal, setModal] = useState<boolean>(false)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [limit, setLimit] = useState<number>(10)
    const [pages, setPages] = useState<number>(1)
    const [singlePost,setSinglePost] = useState<PostType>({userId:Math.random(), id:Math.random(),title:'',body:''})

    const [fetchPosts, postIsLoading, postError] = UseFetching(async () => {
        const posts = await getPosts(limit, pages)
        setPosts(posts.data)
        const total = posts.headers['x-total-count']
        setTotalPages(getTotalPages(+total, limit))
    })
    console.log(totalPages)
    useEffect(() => {
        // @ts-ignore
        fetchPosts()
    }, [pages])
    const addPost = (newPost: PostType) => {
        setPosts([...posts, {...newPost}])
        setModal(false)
    }
    const delPost = (id: number) => {
        const delPost = posts.filter(el => el.id !== id)
        setPosts(delPost)
    }
    const changePageHandler = (page: number) => {
        setPages(page)
    }
    const modalHandler = () => {
        setModal(!modal)
    }
    const getSinglePost = (post:PostType) => {
        setSinglePost(post)
    }
    return (
        <div className="App">
            <CreateComponent
                modalHandler={modalHandler}
                addPost={addPost}
                modal={modal}
                setModal={setModal}
            />
            <PostFilter
                filteredPost={filteredPost}
                setFilteredPost={setFilteredPost}
            />
            {postError &&
            <h1>Произошли ошибка - {postError}</h1>
            }
            {!postIsLoading ?
                <PostList
                    sortedAndSearchedPost={sortedAndSearchedPost as PostType[]}
                    delPost={delPost}
                    getSinglePost={getSinglePost}
                /> : <Loading/>
            }
            <Pagination
                pages={pages}
                totalPages={totalPages}
                changePageHandler={changePageHandler}
            />

        </div>
    );
}

export default Pages;
