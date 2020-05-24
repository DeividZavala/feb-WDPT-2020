import React, { useState } from "react";

const Counter = () => {
  const [counter, setCount] = useState(0);
  const handleMinus = () => setCount((prev) => prev - 1);
  const handlePlus = () => setCount((prev) => prev + 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <div>
          <button onClick={handleMinus} type="button">
            -
          </button>
          <button onClick={handlePlus} type="button">
            +
          </button>
        </div>
      </header>
    </div>
  );
};

export default Counter;
