import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // const [products, setProducts] = useState([]);
  // const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Sumar 1</button>
      <button onClick={() => setCounter((prevState) => prevState - 1)}>
        Restar 1
      </button>
    </div>
  );
}

export default App;
