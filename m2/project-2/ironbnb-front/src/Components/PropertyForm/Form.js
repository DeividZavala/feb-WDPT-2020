import React from "react";
import InputField from "../Common/InputField";
import TextAreaField from "../Common/TextAreaField";

const Form = ({ handleSubmit, handleChange, handleImagesChange, property }) => (
  <div>
    <form className="uk-width-1-1" onSubmit={handleSubmit}>
      <InputField
        name="title"
        placeholder="property name"
        handleChange={handleChange}
      />
      <InputField
        name="price"
        placeholder="price per night"
        handleChange={handleChange}
      />
      <InputField
        name="address"
        placeholder="property address"
        handleChange={handleChange}
      />
      <InputField
        name="capacity"
        placeholder="property capacity"
        handleChange={handleChange}
      />
      <TextAreaField
        name="description"
        hint={`${property?.description?.length}/50`}
        handleChange={handleChange}
      />
      <TextAreaField
        name="images"
        handleChange={handleImagesChange}
        hint="separate multiple images by commas"
      />
      <button type="submit" className="uk-button uk-button-primary">
        Create property
      </button>
    </form>
  </div>
);

export default Form;
