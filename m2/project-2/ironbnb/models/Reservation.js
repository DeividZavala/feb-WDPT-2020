const { Schema, model } = require("mongoose");

const reservationSchema = new Schema(
  {
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    guest: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    checkin: {
      type: Date,
      required: [true, "Debes indicar cuando iniciará la reservación"],
    },
    checkout: {
      type: Date,
      required: [true, "Debes indicar cuando finaliza la reservación"],
    },
    guest_number: {
      type: Number,
      min: [1, "El minimo de personas por reservación es 1"],
    },
  },
  { timestamps: true }
);

module.exports = model("Reservation", reservationSchema);
