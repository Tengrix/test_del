import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";

const Navbar = () => {
    const authContext = useContext(AuthContext)
    const logoutHandler = () => {
        authContext?.setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={'navbarBlock'}>
            <div className={'navbarItems'}>
                <Link to={'/about'}>
                    About
                </Link>
                <Link to={'/posts'}>
                    Posts
                </Link>
                {authContext?.isAuth &&
                <Link onClick={logoutHandler} to={'/login'}>
                    Logout
                </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;