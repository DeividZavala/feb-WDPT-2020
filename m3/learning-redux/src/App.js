import React from "react";
import Counter from "./Counter";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  //const status = useSelector((state) => state.todos.status);

  return (
    <div className="App">
      <h1>Deivid TODOS</h1>
      <div>
        <Counter />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
