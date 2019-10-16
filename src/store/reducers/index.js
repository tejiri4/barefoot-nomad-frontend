import { combineReducers } from "redux";
import sayHelloReducer from "./sayHelloReducer";

export default combineReducers({
  hello: sayHelloReducer
});
