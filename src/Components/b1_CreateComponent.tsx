import React from 'react';
import MyButton from "./MyButton/MyButton";
import MyModal from "./MyModal/MyModal";
import PostForm from "./a2_PostForm";
import {PostType} from "../types/Types";
type CreateComponentType = {
    modalHandler:()=>void;
    modal:boolean;
    setModal:(value:boolean)=>void
    addPost:(post:PostType)=>void;
}
const CreateComponent = ({modal,setModal,modalHandler,addPost}:CreateComponentType) => {
    return (
        <div>
            <MyButton onClick={modalHandler}>
                Create
            </MyButton>
            {modal
            &&
            <MyModal setVisible={setModal}>
                <PostForm
                    addPost={addPost}
                />
            </MyModal>
            }
        </div>
    );
};

export default CreateComponent;