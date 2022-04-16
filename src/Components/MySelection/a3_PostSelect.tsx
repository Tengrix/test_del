import React, {DetailedHTMLProps, SelectHTMLAttributes} from 'react';
import s from './PostSelect.module.css'
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    onChangeCallbackA?: (value: string) => void
    onChange: (e: string) => void;
}

const PostSort = ({value, options, onChange, defaultValue, ...props}: SuperSelectPropsType) => {
    return (
        <select

            className={s.select}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            {...props}
        >
            <option value="">{defaultValue}</option>
            {options?.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default PostSort;