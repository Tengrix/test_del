import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './MyButton.module.css'
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const MyButton = ({children, ...props}:DefaultButtonPropsType) => {
    return (
        <button {...props} className={s.btn}>
            {children}
        </button>
    );
};

export default MyButton;