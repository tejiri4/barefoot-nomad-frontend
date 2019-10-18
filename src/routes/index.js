<<<<<<< HEAD
import Home from "../pages/Home";
import SignUp from '../pages/SignUp';
import ForgotPassword from './../pages/ForgotPassword/index';
import ResetPassword from './../pages/ResetPassword/index';
import Login from './../pages/Login/index';
=======
import SignUp from "../pages/SignUp";
import ForgotPassword from "./../pages/ForgotPassword/index";
import ResetPassword from "./../pages/ResetPassword/index";
>>>>>>> implement not found page and adjust reset password


const routes =  [
  {
    path: "/signup",
    component: SignUp,
    exact: true
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    exact: true
  },
  {
    path: "/reset-password",
    component: ResetPassword,
    exact: true
  },
  {
    path: "/login",
    component: Login,
    exact: true
  },
];

export default routes;
