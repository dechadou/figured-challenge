import HomePage from '../page/HomePage';
import Admin from "../page/Admin";
import Login from "../page/Login";

export const RouteNames = {
    HOME: 'home',
    ADMIN: 'admin',
    LOGIN: 'login',
    LOGOUT: 'logout'
};

export default [
    {
        path: '/',
        component: HomePage,
        name: RouteNames.HOME,
    },
    {
        path: '/login',
        component: Login,
        name: RouteNames.LOGIN,
    },
    {
        path: '/logout',
        component: Login,
        name: RouteNames.LOGOUT,
    },
    {
        path: '/admin',
        component: Admin,
        name: RouteNames.ADMIN,
    },

];
