import React, {useMemo} from 'react';
import {PostType} from "../types/Types";

export const UseSortPosts = (posts:PostType[],sortingValue:string) => {
    return useMemo(() => {
        if (sortingValue === 'title') {
            return [...posts].sort((a, b) => a.title > b.title ? 1 : -1)
        } else if (sortingValue === 'description') {
            return [...posts].sort((a, b) => a.body > b.body ? 1 : -1)
        } else {
            return posts
        }
    }, [posts, sortingValue])
};
export const UseFilteredPosts = (posts: PostType[], sort:string, searchQuery: string) => {
    const sortedPosts = UseSortPosts(posts,sort)
    const filteredPosts =  useMemo(() => {
        if (sortedPosts) {
            return sortedPosts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
        }
    }, [posts,sort,searchQuery])
    return filteredPosts
};