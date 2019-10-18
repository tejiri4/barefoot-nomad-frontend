import Home from "../pages/Home";
import SignUp from '../pages/SignUp';

const routes = [
  {
    path: "/",
    component: Home,
    exact: false
  },
  {
    path: "/signup",
    component: SignUp,
    exact: false
  }
];

export default routes;
