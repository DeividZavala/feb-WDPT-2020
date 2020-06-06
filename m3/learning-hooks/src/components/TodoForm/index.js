import React, { useState } from "react";
import { createTodo } from "../../services/todosService";
import UIkit from "uikit";

const TodoForm = () => {
  const [todo, setTodo] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTodo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(todo)
      .then(() => {
        UIkit.notification({
          status: "success",
          message: `<span uk-icon='icon: check'></span> TODO added`,
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {JSON.stringify(todo)}
      <form className="uk-form-stacked">
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="title">
            Title:
          </label>
          <div className="uk-form-controls">
            <input
              onChange={handleChange}
              className="uk-input"
              id="title"
              type="text"
              name="title"
              placeholder="Learn node"
            />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="body">
            Body:
          </label>
          <div className="uk-form-controls">
            <textarea
              onChange={handleChange}
              className="uk-input"
              id="body"
              type="text"
              name="body"
            ></textarea>
          </div>
        </div>
        <button className="uk-button uk-button-primary">Add task</button>
      </form>
    </div>
  );
};

export default TodoForm;
