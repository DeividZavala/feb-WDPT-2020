import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./redux/actions";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <div>
          <button onClick={() => dispatch(decrease())} type="button">
            -
          </button>
          <button onClick={() => dispatch(increase())} type="button">
            +
          </button>
        </div>
      </header>
    </div>
  );
};

export default Counter;
