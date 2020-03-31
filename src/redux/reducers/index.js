import { combineReducers } from "redux";
import todos from "./todos";

// combine multiple reducers to use in store
export default combineReducers({ todos });
