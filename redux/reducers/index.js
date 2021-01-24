import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { user } from "./user";
// import { markers } from "./markers";
// import { singleMarker } from "./singleMarker";

const reducers = combineReducers({
  userState: user,
  // markers,
  // singleMarker,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducers, middleware);

export default store;
