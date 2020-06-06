import React from "react";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

const TodoContainer = () => {
  return (
    <section className="uk-section">
      <div className="uk-container">
        <div className="uk-grid uk-child-width-1-2">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </section>
  );
};

export default TodoContainer;
