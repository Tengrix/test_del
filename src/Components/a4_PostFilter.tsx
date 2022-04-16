import React from 'react';
import MyInput from "./MyInput/MyInput";
import PostSort from "./MySelection/a3_PostSelect";
import {SortAndSearchedTypes, SortType} from "../types/Types";

type PostFilterType = {
    setFilteredPost: (value: SortAndSearchedTypes) => void;
    filteredPost: SortAndSearchedTypes
}
const PostFilter = ({filteredPost, setFilteredPost}: PostFilterType) => {
    return (
        <div>
            <MyInput
                placeholder={'Search'}
                name='search'
                value={filteredPost.query}
                onChange={(e) => setFilteredPost({...filteredPost, query: e.target.value})}
            />
            <label htmlFor="search">Search</label>
            <div>
                <PostSort
                    options={[
                        {value: 'title', name: 'By name'},
                        {value: 'description', name: 'By description'},
                    ]}
                    value={filteredPost.sort}
                    defaultValue=''
                    onChange={selectedSort => setFilteredPost({...filteredPost, sort: selectedSort as SortType})}
                />
            </div>
        </div>
    );
};

export default PostFilter;