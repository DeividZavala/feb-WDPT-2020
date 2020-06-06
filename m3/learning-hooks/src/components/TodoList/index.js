import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

const TodoList = () => {
  const { todos } = useContext(AppContext);

  return (
    <div>
      <ul className="uk-list uk-list-divider">
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}: </strong>
            {todo.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
