const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    total: {
      type: Number,
      required: [true, "Debes agregar un total"],
    },
    client: {
      unique: true,
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Debes agregar el cliente"],
    },
    items: {
      type: [{ product: Schema.Types.ObjectId, quantity: Number }],
      min: [1, "El carrito debe contener por lo menos un producto"],
    },
  },
  { timestamps: true }
);

module.exports = model("Cart", cartSchema);
