import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './MyInput.module.css'
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}
const MyInput = ({...props}:SuperInputTextPropsType) => {
    return (
        <input {...props} className={s.myInput}>

        </input>
    );
};

export default MyInput;