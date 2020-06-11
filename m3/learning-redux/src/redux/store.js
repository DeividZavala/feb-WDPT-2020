import { createStore, combineReducers } from "redux";
import counter from "./reducer";
import todos from "./TodosDuck";

const rootReducer = combineReducers({
  counter,
  todos,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
