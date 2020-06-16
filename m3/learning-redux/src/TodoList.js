import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { denormalizeData } from "./utils";
import { getTodos } from "./redux/TodosDuck";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.results);
  const loadingTodos = useSelector((state) => state.todos.loading);
  const dispatch = useDispatch();

  //const status = useSelector((state) => state.todos.status);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div>
      <h2>Todos</h2>
      {loadingTodos && <h2>Cargando...</h2>}
      {/* {status === "pending" && <h2>Cargando...</h2>} */}

      {!loadingTodos && todos && (
        <ul>
          {denormalizeData(todos).map((todo) => (
            <li key={todo.id}>
              {todo.title}: {todo.body}
            </li>
          ))}
        </ul>
      )}
      {/* {status === "success" && todos && (
            <ul>
              {denormalizeData(todos).map((todo) => (
                <li key={todo.id}>
                  {todo.title}: {todo.body}
                </li>
              ))}
            </ul>
          )} */}

      {/* {status === "error" && <h2>Error al pedir todos</h2>} */}
    </div>
  );
};

export default TodoList;
