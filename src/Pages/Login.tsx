import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {LoginFormType} from "../types/LoginFormType";
import {AuthContext} from "../context";
import {Redirect} from "react-router-dom";


const Login = () => {
    const authContext = useContext(AuthContext)
    const {register,handleSubmit,formState: { errors } } = useForm<LoginFormType>()
    const onSubmit = () => {
        authContext?.setIsAuth(true)
        localStorage.setItem('auth','true')
    }
    if(authContext?.isAuth){
       return <Redirect to={'/posts'}/>
    }
    return (
        <div>
           <h1>Login Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name')}/>
                <input type="text" {...register('email')}/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Login;