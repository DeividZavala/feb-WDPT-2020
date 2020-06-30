import React from "react";

const InputField = ({
  name,
  type = "text",
  handleChange,
  placeholder,
  ...props
}) => (
  <div className="uk-margin">
    <label className="uk-form-label uk-text-capitalize" htmlFor={name}>
      {name}:
    </label>
    <div className="uk-form-controls">
      <input
        onChange={handleChange}
        name={name}
        className="uk-input"
        id={name}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  </div>
);

export default InputField;
