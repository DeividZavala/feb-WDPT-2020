import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { denormalizeData } from "./utils";
import { getTodos } from "./redux/TodosDuck";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.results);
  const loadingTodos = useSelector((state) => state.todos.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div>
      <h1>Todos</h1>
      {loadingTodos && <h2>Cargando...</h2>}
      {!loadingTodos && todos && (
        <ul>
          {denormalizeData(todos).map((todo) => (
            <li key={todo.id}>
              {todo.title}: {todo.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
