import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // const [products, setProducts] = useState([]);
  // const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCounter(count + 1)}>Sumar 1</button>
      <button onClick={() => setCounter((prevState) => prevState - 1)}>
        Restar 1
      </button>
    </div>
  );
}

export default Counter;
