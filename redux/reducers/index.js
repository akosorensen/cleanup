import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { user } from "./user";
import { markers } from "./markers";

const reducers = combineReducers({
  userState: user,
  markerState: markers,
});

// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
// );

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
