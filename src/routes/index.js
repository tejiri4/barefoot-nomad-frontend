import Home from "../pages/Home";
import SignUp from '../pages/SignUp';
import ForgotPassword from './../pages/ForgotPassword/index';
import ResetPassword from './../pages/ResetPassword/index';

const routes = [
  {
    path: "/",
    component: Home,
    exact: false
  },
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
  }
];

export default routes;
