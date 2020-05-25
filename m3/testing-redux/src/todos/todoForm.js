import React from "react";

const TodoForm = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="todo">Todo:</label>
          <input id="todo" type="text" />
        </div>
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default TodoForm;
