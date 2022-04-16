import About from "../Pages/About";
import SinglePost from "../Pages/SinglePost";
import Pages from "../Pages/Pages";
import Login from "../Pages/Login";

export const privateRoutes = [
    {path:'/about', component: About, exact:true},
    {path:'/posts', component: Pages, exact:true},
    {path:'/posts/:id', component: SinglePost, exact:true},
    {path:'/login', component: Login, exact:true},
]
export const publicRoutes = [
    {path:'/login', component: Login, exact:true},
]