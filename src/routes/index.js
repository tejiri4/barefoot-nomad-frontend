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
<<<<<<< HEAD
>>>>>>> implement not found page and adjust reset password
=======
import Login from './../pages/Login/index';
>>>>>>> implement login


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
