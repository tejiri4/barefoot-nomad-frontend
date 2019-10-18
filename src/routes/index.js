import Home from "../pages/Home";
import SignUp from '../pages/SignUp';
import ForgotPassword from './../pages/ForgotPassword/index';

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
  }
];

export default routes;
