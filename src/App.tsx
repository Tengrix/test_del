import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import AppRouter from "./Components/AppRouter";
import {useEffect, useState} from "react";
import { AuthContext } from './context';

function App() {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setIsLoading(false)
    },[])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <Navbar/>
            <AppRouter/>
        </AuthContext.Provider>
    );
}

export default App;
