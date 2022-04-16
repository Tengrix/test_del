import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routes";
import {AuthContext} from "../context";
import Loading from "./LoadingComponent/Loading";

const AppRouter = () => {
    const authContext = useContext(AuthContext)
    if(authContext?.isLoading){
        return <Loading/>
    }
    return (
        authContext?.isAuth ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to={'/posts'}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to={'/login'}/>
            </Switch>
    );
};

export default AppRouter;