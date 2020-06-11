import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./redux/actions";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(decrease())}>-</button>
        <button onClick={() => dispatch(increase())}>+</button>
      </div>
    </div>
  );
};

export default Counter;
