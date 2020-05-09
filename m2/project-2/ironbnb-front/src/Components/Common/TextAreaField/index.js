import React from "react";

const TextAreaField = ({ name, handleChange, hint, value }) => (
  <div className="uk-margin">
    <label className="uk-form-label uk-text-capitalize" htmlFor={name}>
      {name} {hint && `(${hint})`}:
    </label>
    <div className="uk-form-controls">
      <textarea
        onChange={handleChange}
        className="uk-textarea"
        name={name}
        id={name}
        cols="30"
        rows="5"
        value={value}
      ></textarea>
    </div>
  </div>
);

export default TextAreaField;
