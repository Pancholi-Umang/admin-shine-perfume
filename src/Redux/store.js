import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [ReduxThunk];

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
