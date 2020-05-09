import React from "react";
import InputField from "../Common/InputField";
import TextAreaField from "../Common/TextAreaField";

const Form = ({ handleSubmit, handleChange, handleImagesChange, property }) => {
  const descriptionLength =
    (property.description && property.description.length) || 0;
  return (
    <div>
      <form className="uk-width-1-1" onSubmit={handleSubmit}>
        <InputField
          name="title"
          value={property.title}
          placeholder="property name"
          handleChange={handleChange}
        />
        <InputField
          name="price"
          value={property.price}
          placeholder="price per night"
          handleChange={handleChange}
        />
        <InputField
          name="address"
          value={property.address}
          placeholder="property address"
          handleChange={handleChange}
        />
        <InputField
          name="capacity"
          value={property.capacity}
          placeholder="property capacity"
          handleChange={handleChange}
        />
        <TextAreaField
          name="description"
          value={property.description}
          hint={`${descriptionLength}/50`}
          handleChange={handleChange}
        />
        <TextAreaField
          name="images"
          value={property.images?.join(",")}
          handleChange={handleImagesChange}
          hint="separate multiple images by commas"
        />
        <button type="submit" className="uk-button uk-button-primary">
          Create property
        </button>
      </form>
    </div>
  );
};

export default Form;
