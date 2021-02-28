import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { user } from "./user";
import { markers } from "./markers";

const reducers = combineReducers({
  userState: user,
  markerState: markers,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
