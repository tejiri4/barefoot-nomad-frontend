import SignUp from "../pages/SignUp";
import ForgotPassword from "./../pages/ForgotPassword/index";
import ResetPassword from "./../pages/ResetPassword/index";
import Login from "./../pages/Login/index";

const routes = [
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
  }
];

export default routes;
