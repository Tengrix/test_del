import React, {ReactChild} from 'react';
import s from './MyModal.module.css'
type MyModalType = {
    children?:ReactChild;
    setVisible:(value:boolean)=>void;
}
const MyModal = ({children,setVisible}:MyModalType) => {
    return (
        <div className={[s.myModal, s.active].join(' ')} onClick={()=>setVisible(false)}>
            <div className={s.myModalContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>

        </div>
    );
};

export default MyModal;