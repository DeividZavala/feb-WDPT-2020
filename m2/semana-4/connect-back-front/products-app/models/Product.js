const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Debes agregar un nombre de producto"],
    },
    price: {
      type: Number,
      min: [1, "El precio es muy bajo"],
    },
    image: {
      type: String,
      required: [true, "Agrega una imagen para el producto"],
    },
    description: {
      type: String,
      required: [true, "Debes agregar una descripcion de producto"],
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Debes indicar quien es el vendedor"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productsSchema);
