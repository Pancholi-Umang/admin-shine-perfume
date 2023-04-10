import { combineReducers } from "redux";
import productReducer from "./reducer";
import OrderReducer from "./OrderReducer";
import LoginReducer from "./LoginReducer";

const RootReducer = combineReducers({
  item: productReducer,
  order: OrderReducer,
  login: LoginReducer
});

export default RootReducer;
