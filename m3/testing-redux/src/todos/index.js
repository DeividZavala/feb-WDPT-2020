import React, { useEffect } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../redux/TodosDuck";

const Todos = () => {
  const todos = useSelector((state) => state.todos.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
};

export default Todos;
