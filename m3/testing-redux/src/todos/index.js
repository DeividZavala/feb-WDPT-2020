import React, { useState } from "react";

const Todos = () => {
  const [todos, addTodos] = useState([]);
  const [todo, setTodo] = useState({});

  const addTodo = (e) => {
    e.preventDefault();
    addTodos((prevState) => [...prevState, todo]);
  };

  const handleChange = (e) => {
    const newTodo = { body: e.target.value };
    setTodo(newTodo);
  };

  return (
    <div>
      <div>
        <form onSubmit={addTodo}>
          <div>
            <label htmlFor="todo">Todo:</label>
            <input onChange={handleChange} id="todo" type="text" />
          </div>
          <button>Add Todo</button>
        </form>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.body}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
