import React from "react";
import Counter from "./Counter";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
