import React from "react";

const TodoList = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.body}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
