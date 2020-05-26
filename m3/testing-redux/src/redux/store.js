import { createStore, combineReducers, applyMiddleware } from "redux";
import { default as counter } from "./reducer";
import { default as todos } from "./TodosDuck";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter,
  todos,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
