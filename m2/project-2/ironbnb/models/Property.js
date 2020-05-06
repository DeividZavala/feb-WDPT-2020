const { Schema, model } = require("mongoose");

const propertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "La propiedad debe tener un dueño"],
    },
    title: {
      type: String,
      required: [true, "Debes agregar un titulo a tu propiedad"],
    },
    address: {
      type: String,
      required: [true, "Debes agregar una dirección para la propiedad"],
    },
    description: {
      type: String,
      minlength: [50, "La descripción es muy pequeña"],
    },
    capacity: {
      type: Number,
      required: [true, "Debes agregar la capacidad de tu propiedad"],
    },
    images: {
      type: [String],
      minlength: [1, "Debes agregar por lo menos una imagen"],
    },
    price: {
      type: Number,
      min: [1, "El precio de propiedad por noche es muy bajo"],
      required: [true, "Debes agregar el precio por noche de tu propiedad"],
    },
  },
  { timestamps: true }
);

module.exports = model("Property", propertySchema);
