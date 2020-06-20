const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El producto debe tener un titulo"],
    },
    price: {
      type: Number,
      required: [true, "El producto debe tener un precio"],
      min: [10, "El precio minimo es de 10"],
    },
    description: {
      type: String,
      required: [true, "El producto debe tener una descripción"],
    },
    images: {
      type: [String],
      min: [1, "El producto debe tener minimo una imagen"],
    },
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
