const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    total: {
      type: Number,
      required: [true, "Debes agregar un total"],
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Debes agregar el cliente"],
    },
    items: {
      type: [{ product: Schema.Types.ObjectId, quantity: Number }],
      min: [1, "La order debe contener por lo menos un producto"],
    },
    status: { type: String, enum: ["Pendiente", "Enviado", "Entregado"] },
  },
  { timestamps: true }
);

module.exports = model("Order", orderSchema);
